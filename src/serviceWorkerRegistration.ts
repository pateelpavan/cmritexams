let hasReloadedForSW = false;

export function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const swUrl = `${import.meta.env.BASE_URL ?? '/'}sw.js`;

  const register = () => {
    navigator.serviceWorker
      .register(swUrl, { scope: import.meta.env.BASE_URL ?? '/' })
      .then((registration) => {
        const maybeActivate = () => {
          if (registration.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          }
        };

        maybeActivate();
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                maybeActivate();
              }
            });
          }
        });
      })
      .catch((error) => {
        console.error('Service worker registration failed:', error);
      });
  };

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (hasReloadedForSW) return;
    hasReloadedForSW = true;
    window.location.reload();
  });

  if (document.readyState === 'complete') {
    register();
  } else {
    window.addEventListener('load', register, { once: true });
  }
}

export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => registration.unregister());
    });
  }
}
