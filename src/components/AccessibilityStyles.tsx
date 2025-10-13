import { useEffect } from "react";

/**
 * Global accessibility styles and behaviors
 * - Keyboard navigation focus styles
 * - Reduced motion support
 * - Skip to content functionality
 */
const AccessibilityStyles = () => {
  useEffect(() => {
    // Add focus-visible class for keyboard navigation
    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleMouseDownOnce);
      }
    };

    const handleMouseDownOnce = () => {
      document.body.classList.remove('user-is-tabbing');
      window.removeEventListener('mousedown', handleMouseDownOnce);
      window.addEventListener('keydown', handleFirstTab);
    };

    window.addEventListener('keydown', handleFirstTab);

    return () => {
      window.removeEventListener('keydown', handleFirstTab);
      window.removeEventListener('mousedown', handleMouseDownOnce);
    };
  }, []);

  return (
    <style>
      {`
        /* Focus styles for keyboard navigation */
        .user-is-tabbing *:focus {
          outline: 2px solid hsl(var(--accent)) !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 4px hsl(var(--accent) / 0.2) !important;
        }

        /* Remove outline when not using keyboard */
        body:not(.user-is-tabbing) *:focus {
          outline: none;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
          }
        }

        /* Skip to content link */
        .skip-to-content {
          position: absolute;
          top: -40px;
          left: 0;
          background: hsl(var(--accent));
          color: hsl(var(--accent-foreground));
          padding: 8px 16px;
          text-decoration: none;
          z-index: 100;
          transition: top 0.3s;
        }

        .skip-to-content:focus {
          top: 0;
        }

        /* Ensure minimum touch target sizes (44x44px) */
        button,
        a,
        input[type="checkbox"],
        input[type="radio"] {
          min-width: 44px;
          min-height: 44px;
        }

        /* Screen reader only class */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .sr-only-focusable:focus {
          position: static;
          width: auto;
          height: auto;
          padding: inherit;
          margin: inherit;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `}
    </style>
  );
};

export default AccessibilityStyles;
