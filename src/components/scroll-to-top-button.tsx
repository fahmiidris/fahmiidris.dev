import * as React from 'react';
import { ArrowSmUpIcon } from '@heroicons/react/outline';

export const ScrollToTopButton = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (!visible && window.scrollY > 250) {
        setVisible(true);
      } else if (visible && window.scrollY <= 250) {
        setVisible(false);
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      (window as any).removeEventListener('scroll', onScroll, { passive: true });
    };
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed right-4 bottom-4 z-50" style={{ visibility: visible ? 'visible' : 'hidden' }}>
      <button
        type="button"
        onClick={() => scrollToTop()}
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-800 p-2 text-white hover:bg-slate-700 focus:outline-none"
      >
        <ArrowSmUpIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
