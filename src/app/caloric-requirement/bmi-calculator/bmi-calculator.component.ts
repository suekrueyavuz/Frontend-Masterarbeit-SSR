import { Component, Input, SimpleChanges } from '@angular/core';
import { CaloricRequirement } from 'src/app/model/caloric-requirement';
import { CaloricRequirementService } from 'src/app/services/caloric-requirement.service';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {
  @Input() person?:CaloricRequirement;
  bmi?:number;

  math = Math;

  constructor(private caloricRequirementService:CaloricRequirementService) {}

  ngOnChanges(changes:SimpleChanges) {
    this.bmi = this.getBmi();
  }

  getBmi() {
    return this.caloricRequirementService.getBmi(this.person!);
  }
}
