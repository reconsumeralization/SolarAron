import { useEffect, useRef } from 'react';

interface UseFormAutoSaveOptions {
  key: string;
  data: any;
  delay?: number;
  enabled?: boolean;
}

export function useFormAutoSave({ key, data, delay = 1000, enabled = true }: UseFormAutoSaveOptions) {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const previousDataRef = useRef<any>();

  useEffect(() => {
    if (!enabled) return;

    // Only save if data has actually changed
    if (JSON.stringify(data) === JSON.stringify(previousDataRef.current)) {
      return;
    }

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout to save data
    timeoutRef.current = setTimeout(() => {
      try {
        localStorage.setItem(`form_autosave_${key}`, JSON.stringify(data));
        previousDataRef.current = data;
      } catch (error) {
        console.warn('Failed to save form data to localStorage:', error);
      }
    }, delay);

    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [data, key, delay, enabled]);

  // Function to load saved data
  const loadSavedData = (): any | null => {
    try {
      const saved = localStorage.getItem(`form_autosave_${key}`);
      return saved ? JSON.parse(saved) : null;
    } catch (error) {
      console.warn('Failed to load saved form data:', error);
      return null;
    }
  };

  // Function to clear saved data
  const clearSavedData = () => {
    try {
      localStorage.removeItem(`form_autosave_${key}`);
    } catch (error) {
      console.warn('Failed to clear saved form data:', error);
    }
  };

  // Function to check if there's saved data
  const hasSavedData = (): boolean => {
    try {
      return localStorage.getItem(`form_autosave_${key}`) !== null;
    } catch (error) {
      return false;
    }
  };

  return {
    loadSavedData,
    clearSavedData,
    hasSavedData,
  };
}