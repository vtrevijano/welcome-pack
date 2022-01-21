import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharacterListService } from 'src/app/services/character-list.service';
import { Character } from 'src/app/shared/model/shared';

@Component({
  selector: 'app-characters-request',
  templateUrl: './characters-request.component.html',
  styleUrls: ['./characters-request.component.scss']
})
export class CharactersRequestComponent implements OnInit {

public characterList: Character[] = [];
filter: any;
  constructor(private requestExampleService: CharacterListService) { ;}

  ngOnInit(): void {
    this.requestExampleService.getCharacters()
    .subscribe((data: any) => {
      const results: Character[] = data.results;

      const formattedResults = results.map(({ id, status, name, image }) => ({
        id,
        name,
        image,
        status
      }));
      this.characterList = formattedResults;
    });
  }
}
