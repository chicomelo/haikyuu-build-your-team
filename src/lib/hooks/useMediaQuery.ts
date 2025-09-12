import { useEffect, useState } from 'react';

export function useMediaQuery(query: string) {
  const get = () =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = useState(get);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = () => setMatches(mql.matches);
    if ((mql as any).addEventListener) mql.addEventListener('change', handler);
    else (mql as any).addListener(handler);
    handler();
    return () => {
      if ((mql as any).removeEventListener)
        mql.removeEventListener('change', handler);
      else (mql as any).removeListener(handler);
    };
  }, [query]);

  return matches;
}

// Alinhado ao breakpoint md do Tailwind (>=768px)
export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)');
}

