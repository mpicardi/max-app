import { Injectable } from '@angular/core';

import { TaskObj } from './taskobj';
import { Tasks } from './mock-task';


@Injectable()
export class TaskService {

  constructor() { }

  getTasks(): TaskObj[] {
    return Tasks;
  }

  getTasksSize(): number {
    return Tasks.length;
  }

}
