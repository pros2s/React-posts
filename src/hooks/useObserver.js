import { useEffect, useRef } from "react";


export const useObserver = (loadRef, isLoading, canLoad, callback, char) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cb = (entries, observer) => {
      if (entries[0].isIntersecting && canLoad && !char) callback();
    };

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(loadRef.current);
  }, [ isLoading, char ]);//eslint-disable-line
};
