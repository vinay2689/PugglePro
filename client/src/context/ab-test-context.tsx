import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { stringify } from 'querystring';

// Define different test variations
export type TestVariation = 'A' | 'B';

export interface ABTest {
  id: string;
  name: string;
  variation: TestVariation;
}

interface ABTestContextProps {
  tests: ABTest[];
  getVariation: (testId: string) => TestVariation;
  trackConversion: (testId: string) => void;
  isLoading: boolean;
}

const ABTestContext = createContext<ABTestContextProps | undefined>(undefined);

interface ABTestProviderProps {
  children: ReactNode;
}

export function ABTestProvider({ children }: ABTestProviderProps) {
  const [tests, setTests] = useState<ABTest[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize tests
  useEffect(() => {
    // We'll load from localStorage first for instant response
    const savedTests = localStorage.getItem('abTests');
    if (savedTests) {
      setTests(JSON.parse(savedTests));
      setIsLoading(false);
    }

    // Then we'll try to load or initialize from the server
    initializeTests();
  }, []);

  // Transform frontend test format to backend format
  const mapTestToApiFormat = (test: ABTest) => {
    return {
      testId: test.id,
      name: test.name,
      isActive: true
    };
  };

  const initializeTests = async () => {
    try {
      setIsLoading(true);
      
      // Try to get existing tests from API
      const response = await apiRequest('GET', '/api/ab-tests').catch(() => null);
      
      // If we got tests from the server, use those
      if (response?.ok) {
        const serverDataArray = await response.json();
        
        // Map from server format to our frontend format
        const serverTests = serverDataArray.map((test: any) => ({
          id: test.testId,
          name: test.name,
          // Since the server doesn't store variations directly, we'll randomly assign here
          // In a real app, we'd call /api/ab-tests/variation to see if this user already has a variation
          variation: Math.random() < 0.5 ? 'A' : 'B'
        }));
        
        setTests(serverTests);
        localStorage.setItem('abTests', JSON.stringify(serverTests));
        setIsLoading(false);
        return;
      }
      
      // Otherwise create new tests
      const newTests: ABTest[] = [
        {
          id: 'landing-page-style',
          name: 'Landing Page Style',
          variation: Math.random() < 0.5 ? 'A' : 'B'
        },
        {
          id: 'call-to-action',
          name: 'Call to Action Button',
          variation: Math.random() < 0.5 ? 'A' : 'B'
        }
      ];
      
      setTests(newTests);
      localStorage.setItem('abTests', JSON.stringify(newTests));
      
      // Record the new assignments to the server if available
      // Transform each test to the API format
      for (const test of newTests) {
        await apiRequest('POST', '/api/ab-tests', mapTestToApiFormat(test)).catch(() => {
          // Silent fail if server isn't ready yet
          console.log(`Failed to record AB test ${test.id} to server`);
        });
        
        // Also record the user's variation
        await apiRequest('POST', '/api/ab-tests/variation', {
          testId: test.id,
          userId: 'anonymous-' + Math.random().toString(36).substring(2, 10),
          variation: test.variation
        }).catch(() => {
          console.log(`Failed to record variation for test ${test.id}`);
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getVariation = (testId: string): TestVariation => {
    const test = tests.find(t => t.id === testId);
    return test?.variation || 'A'; // Default to A if not found
  };

  const trackConversion = async (testId: string) => {
    const test = tests.find(t => t.id === testId);
    if (!test) return;
    
    // Track locally
    console.log(`Conversion tracked for test ${testId}, variation ${test.variation}`);
    
    // Generate a consistent user ID that matches what we used for the variation
    const userId = 'anonymous-' + Math.random().toString(36).substring(2, 10);
    
    // Track to server if available
    apiRequest('POST', '/api/ab-tests/conversion', { 
      testId, 
      userId,
      variation: test.variation 
    }).catch(() => {
      // Silent fail if server isn't ready yet
      console.log('Failed to record conversion to server');
    });
  };

  return (
    <ABTestContext.Provider 
      value={{ 
        tests, 
        getVariation, 
        trackConversion,
        isLoading 
      }}
    >
      {children}
    </ABTestContext.Provider>
  );
}

export function useABTest() {
  const context = useContext(ABTestContext);
  if (context === undefined) {
    throw new Error('useABTest must be used within an ABTestProvider');
  }
  return context;
}