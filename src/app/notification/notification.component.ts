import { Component, OnInit, Input } from '@angular/core';

import { NotificationObj } from '../notificationobj';
import { NotificationServiceService } from '../notification-service.service';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notifications: NotificationObj[];

  constructor(private notificationService: NotificationServiceService) {
    this.notifications = notificationService.getNotifications();
  }

  ngOnInit() {
  }

}
