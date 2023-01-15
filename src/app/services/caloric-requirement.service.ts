import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CaloricRequirement } from '../model/caloric-requirement';

@Injectable({
  providedIn: 'root'
})
export class CaloricRequirementService {
  BASE_URL = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  getCaloricRequirements(person:CaloricRequirement) {
    if(person.gender === 'Male') {
      return this.getCaloricRequirementForMale(person);
    } else {
      return this.getCaloricRequirementForFemale(person);
    }
  }

  getCaloricRequirementForMale(person:CaloricRequirement) {
    const body = {
      gender: person.gender,
      age: person.age,
      weight: person.weight,
      height: person.height,
      pal: person.pal
    };
    return this.http.post<any>(this.BASE_URL + 'caloricRequirement', JSON.stringify(body), this.getHeaders());
    //return (66.5 + (13.75 * person.weight) + (5.003 * person.height) - (6.75 * person.age)) * person.pal;
  }

  private getCaloricRequirementForFemale(person:CaloricRequirement) {
    const body = {
      gender: person.gender,
      age: person.age,
      weight: person.weight,
      height: person.height,
      pal: person.pal
    };
    return this.http.post<any>(this.BASE_URL + 'caloricRequirement', JSON.stringify(body), this.getHeaders());
    //return (655.1 + (9.563 * person.weight) + (1.85 * person.height) - (4.676 * person.age)) * person.pal;
  }

  getBmi(person:CaloricRequirement) {
    return person.weight / ((person.height/100) * 2);
  }

  getHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { headers: headers };
  }
}
