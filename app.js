// Registering Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    })
    .catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
}

showNotification();

function showNotification() {
  Notification.requestPermission(result => {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });
      });
    }
  });
}
