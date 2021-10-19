import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/Card';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Output() updateCards: EventEmitter<any> = new EventEmitter;
  @Output() deleteCardEvent: EventEmitter<number> = new EventEmitter;
  @Input() card!: Card;

  faTimes = faTimes;
  showAddTask: Boolean = false;

  
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  toggleAddTask() { this.showAddTask = !this.showAddTask }

  onDeleteCard() {
    const result = window.confirm(`Are you sure you want to delete card: "${this.card.name}"?`);
    if (result) this.deleteCardEvent.emit(this.card.id);
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(() => { this.updateCards.emit() });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task, this.card).subscribe(
      () => { this.updateCards.emit() }
    );
  }

  addTask(task: Task) {
    this.taskService.addTask(task, this.card).subscribe(
      () => { this.updateCards.emit() }
    );
  }

}
