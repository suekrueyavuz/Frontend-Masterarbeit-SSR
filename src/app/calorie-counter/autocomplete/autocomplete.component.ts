import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from 'src/app/model/food';
import { EntryService } from 'src/app/services/entry.service';
import { CalorieService } from 'src/app/services/calorie.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  selectedNahrungsmittel?:Food;
  @Input() selectedNahrungsmittelList:Food[] = [];
  nahrungsmittelSuggestions:Food[] = [];

  totalCalorie:number = 0;
  @Output() totalCalorieChange = new EventEmitter<Food>();
  @Input() date:string = '';
  @Input() meal:string = '';

  constructor(private calorieService: CalorieService,
              private entryService: EntryService) {}

  ngOnInit(): void {}
  
  autocomplete(event:any) {
    this.calorieService.autocomplete(event.query).subscribe((data: any) => {
      this.nahrungsmittelSuggestions = data.common;
    });    
  }

  nahrungsmittelHinzufuegen() {
    if(this.selectedNahrungsmittel) {
      this.calorieService.getNutrients(this.selectedNahrungsmittel?.food_name).subscribe((data:any) => {
        if(this.selectedNahrungsmittel) {
          this.selectedNahrungsmittel.food_name = data.foods[0].food_name;          
          this.selectedNahrungsmittel.calorie = data.foods[0].nf_calories;
          this.selectedNahrungsmittel.carbohydrate = data.foods[0].nf_total_carbohydrate;
          this.selectedNahrungsmittel.protein = data.foods[0].nf_protein;
          this.selectedNahrungsmittel.fat = data.foods[0].nf_total_fat;
          this.entryService.addFood(this.selectedNahrungsmittel, this.date, this.meal).subscribe(() => {
            if(this.selectedNahrungsmittel) {
              this.updateCalorieEvent(this.selectedNahrungsmittel.calorie);
            }
          })
        }
      })
    }
  }

  nahrungsmittelLoeschen(nahrungsmittel:Food) {
    this.entryService.removeFood(nahrungsmittel.food_name, this.date, this.meal).subscribe(() => {
      this.updateCalorieEvent(-nahrungsmittel.calorie);
    })
  }

  updateCalorieEvent(foodCalorie:number) {
    this.totalCalorie += foodCalorie;
    this.totalCalorieChange.emit();
    this.selectedNahrungsmittel = null!;
  }

}
