import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktails } from 'src/app/cocktail-interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent {
cocktails: Cocktails[] = []


constructor(public cocktailService: CocktailService){}

ngOnInit(){
  this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
    this.cocktails = cocktailsFromJsonFile;
  });
}


}
