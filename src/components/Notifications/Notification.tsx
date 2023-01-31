import React, { useState } from 'react';
import Flashbar, {
  FlashbarProps
} from '@cloudscape-design/components/flashbar';

function useNotifications(showSuccessNotification = false) {
  const [successDismissed, dismissSuccess] = useState(false);
  const [disclaimerDismissed, dismissDisclaimer] = useState(false);

  const notifications: Array<FlashbarProps.MessageDefinition> = [];

  if (showSuccessNotification && !successDismissed) {
    notifications.push({
      type: 'success',
      content: 'Resource created successfully',
      statusIconAriaLabel: 'success',
      dismissLabel: 'Dismiss message',
      dismissible: true,
      onDismiss: () => dismissSuccess(true)
    });
  }

  return notifications;
}

interface NotificationsProps {
  successNotification?: boolean;
}

export function Notifications({ successNotification }: NotificationsProps) {
  const notifications = useNotifications(successNotification);
  return <Flashbar items={notifications} />;
}
