import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class CalorieService {
  BASE_URL:string = 'https://trackapi.nutritionix.com/v2/';
  private APP_ID:string = '090dae06';
  private APP_KEY:string = '0718f36e649948a9cb4dc897363634a7';

  constructor(private http: HttpClient) { }

  autocomplete(nahrungsmittel:string) {
    return this.http.get<Food>(this.BASE_URL + 'search/instant?query=' + nahrungsmittel, this.getHeaders());
  }

  getNutrients(nahrungsmittel:string) {
    const body = {
      query: nahrungsmittel,
    };
    return this.http.post<any>(this.BASE_URL + 'natural/nutrients', JSON.stringify(body), this.getHeaders());
  }

  getHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-app-id': this.APP_ID,
      'x-app-key': this.APP_KEY,
      'x-remote-user-id': '0'
    });
    return { headers: headers };
  }
}
