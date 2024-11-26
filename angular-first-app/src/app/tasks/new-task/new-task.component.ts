import { Component, Output, EventEmitter, Signal, output, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  private tasksService = inject(TasksService);

  @Input({required: true}) userId!: string;
  @Output() cancel = new EventEmitter();
  // @Output() add = new EventEmitter<
  // {
  //   title: string,
  //   summary: string,
  //   duedate: string,
  // }
  // >();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   duedate: this.enteredDate
    // })

    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        duedate: this.enteredDate
      }
      ,this.userId);
      this.cancel.emit();
  }
  
}
