import { Component } from '@angular/core';
import { Meal} from './meal.model';

@Component({
  selector: 'app-root',
  template:
  `
  <nav>
    <div class="nav-wrapper grey darken-4 z-depth-2">
      <a href="/" class="brand-logo center ">Meal Tracker</a>
      <ul id="nav-mobile" class="left ">
      <li><button class=" btn hoverable purple darken-4" *ngIf="!newMeal" (click)="addMealFormShow()">Add Meal</button></li>

      </ul>
    </div>
  </nav>
  <br>
  <new-meal [childNewMeal]="newMeal" (newAddSender)="doneAdding()" (newMealSender)="addMeal($event)"></new-meal>
  <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"> </meal-list>


  <edit-meal [childSelectedMeal]="selectedMeal" (doneEditingSender)="doneEditing()"></edit-meal>


  `
})
export class AppComponent{
  masterMealList: Meal[]= [
  new Meal("Hamburger", "No Condiments, with bun lettuce and tomato.", 425),
  new Meal("Baked peaches", "Totally bathed in sugar, with a dollop of whipped cream", 500),
  new Meal("Cucumber","With ranch dressing, and pumpkin seeds", 250),
  new Meal("Cereal","Coco Puffs with milk and sugar", 1000)
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
