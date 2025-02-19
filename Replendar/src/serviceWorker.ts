export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('../sw.js')
      .then((registration) => {
        console.log('📌 Service Worker 등록 완료:', registration);
      })
      .catch((error) => {
        console.error('❌ Service Worker 등록 실패:', error);
      });
  }
}
