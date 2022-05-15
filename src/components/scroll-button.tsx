import * as React from 'react';
import { ArrowSmUpIcon } from '@heroicons/react/outline';

export const ScrollButton = (): JSX.Element => {
  const [visible, setVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    let offset: number = 300;

    const onScroll = (): void => {
      if (!visible && window.scrollY > offset) {
        setVisible(true);
      } else if (visible && window.scrollY <= offset) {
        setVisible(false);
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return (): void => {
      (window as any).removeEventListener('scroll', onScroll, { passive: true });
    };
  }, [visible]);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="fixed right-8 bottom-8 z-50"
      style={{
        visibility: visible ? 'visible' : 'hidden',
      }}
    >
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-500 p-2 text-white hover:bg-cyan-400 focus:outline-none dark:bg-slate-800 dark:hover:bg-slate-800/90"
        onClick={(): void => scrollToTop()}
      >
        <ArrowSmUpIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
