import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/Card';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cards: Card[] = [
    
  ];
  showAddCard: Boolean = false;
  owner: string = 'Ana'; // localstorage.getItem('owner')

  constructor(private BoardService: BoardService) {}

  ngOnInit(): void { this.updateCards(); }

  toggleAddTask() { this.showAddCard = !this.showAddCard }

  deleteCard(id: number){
    this.BoardService
    .deleteCard(id)
    .subscribe(() => { this.updateCards() });
  }

  addCard(card: Card) {
    this.BoardService.addCard(card)
    .subscribe(() => { this.updateCards() });
  }

  updateCards() {
    this.BoardService.getCards(this.owner).subscribe((cards) => this.cards = cards);
  }
}
