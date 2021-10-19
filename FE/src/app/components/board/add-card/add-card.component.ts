import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/Card';


@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {
  @Output() onAddCard: EventEmitter<Card> = new EventEmitter;
  @Input() owner!: string

  name!: string;
  showAddCard!: boolean;
  subscription: Subscription | undefined;

  constructor() {}

  ngOnInit(): void {}


  onSubmit() {
    if (!this.name) return alert('Please add card!');

    const newCard = { name: this.name, owner: this.owner }
    this.onAddCard.emit(newCard);
    this.name='';
  }
}
