import React, { useState, useEffect, useRef } from 'react';

const LinkToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const offsetRef = useRef(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        window.pageYOffset < offsetRef.current &&
        window.pageYOffset > 50 &&
        !isVisible
      ) {
        setIsVisible(true);
      } else if (
        (window.pageYOffset < 50 && isVisible) ||
        (window.pageYOffset > offsetRef.current && isVisible)
      ) {
        setIsVisible(false);
      }

      offsetRef.current = window.pageYOffset;
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isVisible]);

  return (
    <button
      className={`link-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      type="button"
    >
      <i className="arrow-up" />
    </button>
  );
};

export default LinkToTop;
