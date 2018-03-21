import { Component, OnInit } from '@angular/core';

import { Tasks } from '../mock-task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks = Tasks;

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit() {
  }

}
