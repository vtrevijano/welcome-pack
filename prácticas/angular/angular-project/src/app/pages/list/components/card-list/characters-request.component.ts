import { Component, OnInit } from '@angular/core'
import { CharacterListService } from 'src/app/services/character-list.service'
import { Character, TotalCharacters } from 'src/app/shared/model/shared'

@Component({
  selector: 'app-characters-request',
  templateUrl: './characters-request.component.html',
  styleUrls: ['./characters-request.component.scss']
})
export class CharactersRequestComponent implements OnInit {
  public characterList?: Character[]
  public filter?: string
  public length: number = 10
  constructor (private request: CharacterListService) {}

  ngOnInit (): void {
    this.request.getCharacters().subscribe((data: TotalCharacters) => {
      const results: Character[] = data.results

      const formattedResults = results.map(({ id, name, image }) => ({
        id,
        name,
        image
      }))
      this.characterList = formattedResults
    })
  }
}
