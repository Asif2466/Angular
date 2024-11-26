import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';

@Injectable({providedIn: 'root'})
export class TasksService{

    private tasks = dummyTasks;

    constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
          this.tasks = JSON.parse(tasks);
        }
    }

    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks));
    }

    getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData:{
        title:string,
        summary:string,
        duedate:string
      }, userId:string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId:userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.duedate
          })
          this.saveTasks();
      }

    removeTask(userId: string){
        this.tasks = this.tasks.filter((task) => task.id !== userId);
        this.saveTasks();
    }

    


}