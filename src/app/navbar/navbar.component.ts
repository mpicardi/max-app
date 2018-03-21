import { Component, OnInit } from '@angular/core';

import { NotificationServiceService } from '../notification-service.service';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  notificationCounter: number;
  taskCounter: number;

  constructor(private notificationService: NotificationServiceService,private taskService: TaskService ) { 
      this.taskCounter = taskService.getTasksSize();
      this.notificationCounter = notificationService.getNotificationsSize();
  }

  ngOnInit() {
  }

}
