import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
  public characterId?: string | null

  constructor (private route: ActivatedRoute) {}

  ngOnInit (): void {
    this.route.paramMap.subscribe(params => {
      this.characterId = params.get('id')
    })
  }
}
