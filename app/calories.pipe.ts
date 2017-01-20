import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false

})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], calorieCount){
    console.log(input);
    var output: Meal[] = [];
    if(calorieCount === "lowCalories"){
      for(var i = 0; i < input.length; i++){
        if(input[i].calories <= 500){
          output.push(input[i]);
        }
      }
      return output;
    }else if(calorieCount === "highCalories"){
      for(var i = 0; i < input.length; i++){
        if(input[i].calories >  500){
          output.push(input[i]);
        }
      }
      return output;
    }else {
      console.log(output)
      return input;
    }
  }
}
