import { useEffect } from 'react';
import { useScrollLock } from 'usehooks-ts';

const usePreventLenisScroll = (state: boolean) => {
  useEffect(() => {
    if (state) {
      document.documentElement.setAttribute('data-lenis-prevent', 'true');
    } else {
      document.documentElement.removeAttribute('data-lenis-prevent');
    }
  }, [state]);
};

export default usePreventLenisScroll;
