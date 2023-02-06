import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cocktails } from 'src/app/cocktail-interface';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  cocktailsList = 'assets/cocktails.json'

  constructor(public http: HttpClient) {  }

  getCocktails(): Observable<Cocktails[]> {
    return this.http.get<Cocktails[]>(this.cocktailsList);
  }


}
