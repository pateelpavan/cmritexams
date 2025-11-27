export function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const swUrl = '/sw.js';

  const register = () => {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      })
      .catch((error) => {
        console.error('Service worker registration failed:', error);
      });
  };

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

