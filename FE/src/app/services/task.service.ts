import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';
import { Card } from 'src/app/Card';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private apiUrl = 'http://localhost:8080'
  constructor(private http: HttpClient) {}

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/deleteTaskById/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task, card: Card): Observable<Task> {
    const requestBody = { ...task, card };
    const url = `${this.apiUrl}/updateTask`;
    return this.http.patch<Task>(url, requestBody, httpOptions);
  }

  addTask(task: Task, card: Card):Observable<Task> {
    const requestBody = { ...task, card }
    const url = `${this.apiUrl}/addTask`;
    return this.http.post<Task>(url, requestBody, httpOptions);
  }

}