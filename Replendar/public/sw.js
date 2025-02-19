self.addEventListener('push', function (event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '과제 마감 알림';
  const options = {
    body: data.body || '알림 내용이 없습니다.',
    icon: `${self.origin}/images/AppIcon.png`,
    badge: `${self.origin}/images/AppIcon.png`,
    vibrate: [200, 100, 200],
  };

  console.log('📌 알림 아이콘:', options.icon);
  event.waitUntil(self.registration.showNotification(title, options));
});
