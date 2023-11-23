import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';

  loadedFeature = 'recipe';
  RECIPE_LINK = 'recipe';
  SHOPPING_LIST_LINK = 'shopping-list';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
