import React from 'react';

export const useOutsideClick = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event) => {
      console.log("=>(useOutsideClick.jsx:9) event.target", event.target);
      console.log("=>(useOutsideClick.jsx:10) ref.current", ref.current);
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};
