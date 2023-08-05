import { MutableRefObject, useEffect } from "react";

function useReveal(
  element: MutableRefObject<Element | null> | Element,
  callBack: (isInteract: boolean, elem: Element) => void,
  isRef?: boolean,
  // margin?: number,
  // threshold?: number,
) {
  useEffect(() => {
    if (
      !(isRef ? (element as MutableRefObject<Element | null>).current : element)
    )
      return;

    let options = {
      root: null,
      margin: 0,
      threshold: .5,
    };

    let observer = new IntersectionObserver((observe) => {
      observe.forEach((entry) => {
        let elem = entry.target;
          if (entry.isIntersecting) {
            callBack(true, elem);
            return;
          }

          callBack(false, elem);
      });
    }, options);

    observer.observe(isRef ? (element as MutableRefObject<any>).current : element);

    return () => {
      observer.disconnect();
    };
  }, [element]);
}

export default useReveal;
