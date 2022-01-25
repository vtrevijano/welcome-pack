import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Character } from '../shared/model/shared'

const baseUrl = 'https://rickandmortyapi.com/api/character/'
const characterUrl = baseUrl + '?page='

@Injectable({
  providedIn: 'root'
})
export class CharacterListService {
  public index = 1
  public characterList: Character[] = []
  constructor (private http: HttpClient) {}

  getCharacters () {
    return this.http.get(characterUrl)
  }
  getCharactersId (id: any) {
    return this.http.get(baseUrl + id)
  }

  nextPage () {
    this.index = this.index + 1
    this.http
      .get<any>(`${characterUrl}${this.index}`)
      .subscribe(finalResults => {
        this.characterList = finalResults.results
        console.log(this.characterList)
      })
  }
  previousPage () {
    this.index = this.index - 1
    this.http
      .get<any>(`${characterUrl}${this.index}`)
      .subscribe(finalResults => {
        this.characterList = finalResults.results
        console.log(this.characterList)
      })
  }
}
