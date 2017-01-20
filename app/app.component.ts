import { Component } from '@angular/core';
import { Meal} from './meal.model';

@Component({
  selector: 'app-root',
  template:
  `
  <nav>
    <div class="nav-wrapper grey darken-4 z-depth-2">
      <a href="#" class="brand-logo center ">Meal Tracker</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down ">
        <li><a>About</a> </li>
        <li><a>Resources</a></li>
      </ul>
    </div>
  </nav>

  <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"> </meal-list>

  <new-meal [childNewMeal]="newMeal" (newAddSender)="doneAdding()" (newMealSender)="addMeal($event)"></new-meal>

  <button class="btn hoverable purple darken-4" *ngIf="!newMeal" (click)="addMealFormShow()">Add Meal</button>
  <edit-meal [childSelectedMeal]="selectedMeal" (doneEditingSender)="doneEditing()"></edit-meal>


  `
})
export class AppComponent{
  masterMealList: Meal[]= [
  new Meal("hamburger", "No Condiments", 125),
  new Meal("Peaches", "Totally bathed in sugar", 500),
  new Meal("Cucumber","With ranch dressing", 250),
  new Meal("Cereal","Coco Puffs", 800)
  ]
  newMeal = null;
  selectedMeal = null;

  addMeal(newMealFromChild: Meal){
    this.masterMealList.push(newMealFromChild);
  }
  doneAdding(){
    this.newMeal = null;
  }
  addMealFormShow(){
    this.newMeal = true;
  }
  editMeal(clickedMeal){
    this.selectedMeal = clickedMeal;
  }
  doneEditing(){
    this.selectedMeal = null;
  }
}
