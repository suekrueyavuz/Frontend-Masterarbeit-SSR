import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  BASE_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getQuiz() {
    return this.http.get<any>(this.BASE_URL + 'quiz', this.getHeaders());
  }

  getHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { headers: headers };
  }
}
