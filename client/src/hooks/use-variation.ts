import { useABTest, TestVariation } from '@/context/ab-test-context';
import { useState, useEffect } from 'react';

/**
 * Hook for conditionally rendering content based on A/B test variations.
 * 
 * @param testId The ID of the A/B test to check
 * @param defaultVariation The default variation to use if the test isn't loaded yet
 * @returns An object with isA and isB boolean flags and the actual variation
 */
export function useVariation(testId: string, defaultVariation: TestVariation = 'A') {
  const { getVariation, isLoading } = useABTest();
  const [variation, setVariation] = useState<TestVariation>(defaultVariation);

  useEffect(() => {
    if (!isLoading) {
      setVariation(getVariation(testId));
    }
  }, [getVariation, isLoading, testId]);

  return {
    variation,
    isA: variation === 'A',
    isB: variation === 'B',
  };
}

/**
 * Hook that tracks a conversion for a specific A/B test when
 * a condition is met (e.g., a button click).
 * 
 * @param testId The ID of the A/B test to track
 * @param condition Condition that should be true to trigger the conversion
 */
export function useTrackConversion(testId: string, condition: boolean) {
  const { trackConversion } = useABTest();

  useEffect(() => {
    if (condition) {
      trackConversion(testId);
    }
  }, [condition, testId, trackConversion]);
}