import { Component, Input, OnInit } from '@angular/core'
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  @Input() biography!: any
  constructor (
  ) {}

  ngOnInit (): void {
  }
}
