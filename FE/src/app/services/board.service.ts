import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Card } from 'src/app/Card';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({ providedIn: 'root' })
export class BoardService {

  private apiUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  getCards(owner: string): Observable<Card[]> {
    const url = `${this.apiUrl}/getCardListByOwner/${owner}`;
    return this.http.get<Card[]>(url)
  }

  addCard(card: Card): Observable<Card>{
    const url = `${this.apiUrl}/addCard`;
    return this.http.post<Card>(url, card, httpOptions);
  }

  deleteCard(id: number): Observable<Card> {
    const url = `${this.apiUrl}/deleteCardById/${id}`;
    return this.http.delete<Card>(url);
  }
}
