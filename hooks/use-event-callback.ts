'use client';

import { useCallback, useLayoutEffect, useRef } from 'react';

export function useEventCallback<Args extends unknown[], Result>(
  fn: (...args: Args) => Result,
): (...args: Args) => Result {
  const ref = useRef(fn);
  useLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback((...args: Args) => ref.current(...args), []);
}
