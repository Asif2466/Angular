import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private taskService: TasksService){}
  
  @Input({required: true}) userId!:string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  // name = input.required<string>(); 
  //tasks = dummyTasks;

  get selectedUserTask(){
    return this.taskService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string){
  //   this.taskService.removeTask(id)
  // }

  onStartAddingTask(){
    this.isAddingTask = true;
  }

  onCancelTask(){
    this.isAddingTask = false;
  }

  

  // onAddTask(taskData:{
  //   title:string,
  //   summary:string,
  //   duedate:string
  // }){
  //   this.taskService.addTask(taskData,this.userId);
  //   this.isAddingTask = false;
  // }
}
