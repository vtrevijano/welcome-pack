import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CharacterListService } from 'src/app/services/character-list.service'

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  public recoveredId!: any
  public biography!: any
  constructor (
    private activatedRoute: ActivatedRoute,
    private http: CharacterListService
  ) {}

  ngOnInit (): void {
    this.recoveredId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.getCharactersId(this.recoveredId).subscribe(finalResult => {
      this.biography = finalResult
    })
  }
}
