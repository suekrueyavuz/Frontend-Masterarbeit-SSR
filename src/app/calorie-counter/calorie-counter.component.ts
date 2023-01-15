import { Component, OnInit } from '@angular/core';
import { Food } from '../model/food';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-calorie-counter',
  templateUrl: './calorie-counter.component.html',
  styleUrls: ['./calorie-counter.component.css']
})
export class CalorieCounterComponent implements OnInit {
  totalFat:number = 0;
  totalCarbohydrate:number = 0;
  totalProtein:number = 0;
  totalCalorie:number = 0;
  chartData:any;

  date:string = '';

  entriesBreakfast:Food[] = [];
  entriesLunch:Food[] = [];
  entriesDinner:Food[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.date = this.getTodaysDate();
    this.getEntriesAndSetNutrients();
  }

  getEntriesAndSetNutrients() {
    this.resetAllEntries();
    this.entryService.getEntries(this.date).subscribe(value => {
      if(value !== null) {
        this.entriesBreakfast = this.getEntryFromMeal(value.foods.BREAKFAST);      
        this.entriesLunch = this.getEntryFromMeal(value.foods.LUNCH);
        this.entriesDinner = this.getEntryFromMeal(value.foods.DINNER);
      }
      this.updateChartData(); 
    })
  }

  getEntryFromMeal(meal:any) {
    if(meal !== undefined) {
      this.setNutrientsFromMeal(meal);
      return meal;
    }
    return [];
  }

  setNutrientsFromMeal(meal:any) {
    for(let i=0; i<meal.length; i++) {
      this.totalCarbohydrate += meal[i].carbohydrate;
      this.totalFat += meal[i].fat;
      this.totalProtein += meal[i].protein;
      this.totalCalorie += meal[i].calorie;
    }
  }

  updateNutrientsEvent() {
    this.getEntriesAndSetNutrients();
  }

  resetAllEntries() {
    this.entriesBreakfast = [];
    this.entriesLunch = [];
    this.entriesDinner = [];
    this.totalCarbohydrate = 0;
    this.totalFat = 0;
    this.totalProtein = 0;
    this.totalCalorie = 0;
  }

  updateChartData() {
    this.chartData = {
      labels: ['Carbohydrate','Protein','Fat'],
      datasets: [
          {
              data: [this.totalCarbohydrate, this.totalProtein, this.totalFat],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
    };
  }

  updateDate(offset:number) {
    const date = new Date(this.date);
    const offsetDate = new Date(date);
    offsetDate.setDate(offsetDate.getDate() + offset);
    
    var daysBetween = this.getNumberOfDaysBetweenDates(offsetDate);
    if(daysBetween < -10 || daysBetween > 0) {
      return;
    }

    var day = String(offsetDate.getDate()).padStart(2, '0');
    var month = String(offsetDate.getMonth() + 1).padStart(2, '0');
    var year = offsetDate.getFullYear();
    this.date = year + '-' + month + '-' + day;    
    this.getEntriesAndSetNutrients();
  }

  getTodaysDate() {
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var year = today.getFullYear();
    return year + '-' + month + '-' + day;  
  }

  getNumberOfDaysBetweenDates(date:Date) {
    var today = new Date(this.getTodaysDate());
    var differenceTime = date.getTime() - today.getTime();
    return differenceTime / (1000*3600*24);
  }

}
