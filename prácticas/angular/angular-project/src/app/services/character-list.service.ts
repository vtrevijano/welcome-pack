import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../shared/model/shared';

const baseUrl = 'https://rickandmortyapi.com/api/'
const characterUrl = baseUrl + 'character?page=';

@Injectable({
  providedIn: 'root'
})
export class CharacterListService {
  public index = 1;
  public characterList: Character[] = [];
  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(characterUrl);
  }

  /* nextPage() {
    this.index = this.index + 1
    this.http.get<any>(`${characterUrl}${this.index}`).subscribe(finalResults => {
      this.characterList = finalResults.results
    })
  }
  previousPage() {
    this.index = this.index - 1
    this.http.get<any>(`${characterUrl}${this.index}${this.index}`).subscribe(finalResults => {
      this.characterList = finalResults.results
    })
  } */
}
