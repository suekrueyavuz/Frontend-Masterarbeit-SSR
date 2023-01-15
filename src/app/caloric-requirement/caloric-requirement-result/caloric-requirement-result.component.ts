import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-caloric-requirement-result',
  templateUrl: './caloric-requirement-result.component.html',
  styleUrls: ['./caloric-requirement-result.component.css']
})
export class CaloricRequirementResultComponent {
  @Input() caloricRequirement?:number;
  slimCaloricRequirement?:number;
  gainCaloricRequirement?:number;

  math = Math;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if(this.caloricRequirement) {
      this.slimCaloricRequirement = this.caloricRequirement - 200;
      this.gainCaloricRequirement = this.caloricRequirement + 200;
    }
  }
}
