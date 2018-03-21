import { Injectable } from '@angular/core';

import { NotificationObj } from './notificationobj';
import { Notifications } from './mock-notification';

@Injectable()
export class NotificationServiceService {

  constructor() { }

  getNotifications(): NotificationObj[] {
    return Notifications;
  }
  getNotificationsSize(): number {
    return Notifications.length;
  }
}
