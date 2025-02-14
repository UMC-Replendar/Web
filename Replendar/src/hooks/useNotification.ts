import { useEffect, useState } from 'react';

const UseNotificationPermission = () => {
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
  }, []);

  return permission;
};

export default UseNotificationPermission;
