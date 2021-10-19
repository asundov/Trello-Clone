import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;
  @Input() showAddTask!: Boolean

  task: Task = { title: '', message: '', reminder: false, card_id: 1 }

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.task.title) {
      alert('Please add a task!');
      return;
    }

    this.onAddTask.emit(this.task);

    this.task.title = '';
    this.task.message = '';
    this.task.reminder = false;
    this.task.card_id=1;


  }
}
