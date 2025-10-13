/// <reference types="vite/client" />

interface Window {
  gtag?: (
    command: 'event' | 'config' | 'set',
    targetId: string,
    config?: Record<string, any>
  ) => void;
}
