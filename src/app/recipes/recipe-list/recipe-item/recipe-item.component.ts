import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../service/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe: Recipe | undefined;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
