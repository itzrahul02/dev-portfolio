'use client';

import { useEffect } from 'react';

export function BotpressChat() {
  useEffect(() => {
    // Dynamically inject the Botpress scripts
    const injectScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    injectScript('https://cdn.botpress.cloud/webchat/v2.2/inject.js');
    injectScript('https://files.bpcontent.cloud/2025/02/02/09/20250202090934-0B9BXCV7.js');

    return () => {
      // Cleanup injected scripts
      const scripts = Array.from(
        document.querySelectorAll(
          'script[src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"], script[src="https://files.bpcontent.cloud/2025/02/02/09/20250202090934-0B9BXCV7.js"]'
        )
      );
      scripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  return null; // No visual component needed
}
