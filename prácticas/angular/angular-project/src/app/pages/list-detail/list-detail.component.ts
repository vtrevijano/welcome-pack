import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CharacterListService } from 'src/app/services/character-list.service'
import { Biography } from 'src/app/shared/model/shared'

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
  public recoveredId?: string
  public biography?: Biography
  constructor (private activatedRoute: ActivatedRoute,
    private http: CharacterListService) {}

  ngOnInit (): void {
    this.recoveredId = this.activatedRoute.snapshot.paramMap.get('id') || undefined;
    if (this.recoveredId) {
      this.http.getCharactersId(this.recoveredId).subscribe(finalResult => {
        this.biography = finalResult
      })
    }
    
  }
}
