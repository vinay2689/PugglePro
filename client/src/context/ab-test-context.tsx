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

  const initializeTests = async () => {
    try {
      setIsLoading(true);
      
      // Try to get existing tests from API
      const response = await apiRequest('GET', '/api/ab-tests').catch(() => null);
      
      // If we got tests from the server, use those
      if (response?.ok) {
        const serverTests = await response.json();
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
      apiRequest('POST', '/api/ab-tests', newTests).catch(() => {
        // Silent fail if server isn't ready yet
        console.log('Failed to record AB test assignments to server');
      });
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
    
    // Track to server if available
    apiRequest('POST', '/api/ab-tests/conversion', { 
      testId, 
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