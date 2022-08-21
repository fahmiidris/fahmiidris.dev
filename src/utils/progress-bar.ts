interface ProgressBarConfig {
  size: number;
  color: string;
  className: string;
  delay: number;
}

class ProgressBar {
  start: () => void;
  finish: () => void;

  constructor(options?: Partial<ProgressBarConfig>) {
    const config: ProgressBarConfig = Object.assign(
      {
        size: 2,
        color: '#22d3ee',
        className: 'progress-bar',
        delay: 80,
      },
      options
    );

    const initialStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      border: 'none',
      borderRadius: 0,
      backgroundColor: config.color,
      zIndex: 10000,
      height: typeof config.size === 'number' ? config.size + 'px' : config.size,
      color: config.color,
      opacity: 0,
      width: '0%',
    };

    const startedStyle = {
      opacity: 1,
      width: '99%',
      transition: 'width 10s cubic-bezier(0.1, 0.05, 0, 1)',
    };

    const finishedStyle = {
      opacity: 0,
      width: '100%',
      transition: 'width 0.1s ease-out, opacity 0.5s ease 0.2s',
    };

    const glowStyle = {
      opacity: 0.4,
      boxShadow: '3px 0 8px',
      height: '100%',
    };

    let timeout: number | undefined | null;
    let current: HTMLElement;

    this.start = () => {
      if (current && current.parentNode) {
        current.parentNode.removeChild(current);
      }

      current = document.body.appendChild(document.createElement('div'));
      current.className = config.className + ' stopped';
      Object.assign(current.style, initialStyle);

      const glow = current.appendChild(document.createElement('div'));
      glow.className = 'glow';
      Object.assign(glow.style, glowStyle);

      if (timeout != null) {
        clearTimeout(timeout);
      }

      timeout = window.setTimeout(() => {
        timeout = null;
        current.className = config.className + ' started';
        Object.assign(current.style, startedStyle);
      }, config.delay);

      current.scrollTop = 0;
    };

    this.finish = () => {
      if (timeout != null) {
        clearTimeout(timeout);
        timeout = null;
      }

      if (current) {
        current.className = config.className + ' finished';
        Object.assign(current.style, finishedStyle);
      }
    };
  }
}

export default ProgressBar;
