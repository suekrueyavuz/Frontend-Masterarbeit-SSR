import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { Food } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  BASE_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getEntries(date: string) {
    return this.http.get<any>(this.BASE_URL + 'entry?date=' + date, this.getHeaders());
  }

  addFood(food: Food, date: string, meal: string) {
    const body = {
      food_name: food.food_name,
      calorie: food.calorie,
      carbohydrate: food.carbohydrate,
      protein: food.protein,
      fat: food.fat
    };
    return this.http.post<any>(this.BASE_URL + 'entry?date=' + date + '&meal=' + meal, JSON.stringify(body), this.getHeaders());
  }

  removeFood(foodName: string, date: string, meal: string) {
    return this.http.delete<any>(this.BASE_URL + 'entry?date=' + date + '&meal=' + meal + '&foodName=' + foodName, this.getHeaders());
  }

  getHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { headers: headers };
  }
}
