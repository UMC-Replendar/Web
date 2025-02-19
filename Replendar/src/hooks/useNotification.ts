import { useEffect, useState } from 'react';

const useNotificationPermission = () => {
  const [permission, setPermission] = useState<NotificationPermission>(
    Notification.permission
  );

  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((newPermission) => {
        setPermission(newPermission);
        if (newPermission === 'granted') {
          console.log('📌 브라우저 알림 권한이 허용되었습니다.');
        } else {
          console.warn('⚠️ 알림 권한이 거부되었습니다.');
        }
      });
    }
  }, [permission]);

  return permission;
};

const sendNotification = (title: string, body: string) => {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon: '../assets/images/AppIconSvg.svg',
      badge: '../assets/images/AppIconSvg.svg',
    });
  } else {
    console.warn('⚠️ 알림이 허용되지 않았습니다. 브라우저 설정을 확인하세요.');
  }
};

export { useNotificationPermission, sendNotification };
