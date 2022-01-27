import { Component, Input, OnInit } from '@angular/core'
import { Biography } from 'src/app/shared/model/shared'
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  @Input() biography!: Biography
  constructor (
  ) {}

  ngOnInit (): void {
  }
}
