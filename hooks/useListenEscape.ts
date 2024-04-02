'use client';

import { useEffect } from 'react';

interface UseListenEscapeProps {
  action: () => void;
  dependencyArray?: any[];
}

export const useListenEscape = ({
  action,
  dependencyArray
}: UseListenEscapeProps) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        action();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [dependencyArray]);
  return null;
};
