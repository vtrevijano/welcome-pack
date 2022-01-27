import { Component, Input, OnInit } from '@angular/core'
import { Biography } from 'src/app/shared/model/shared'

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  @Input() biography?: Biography
  constructor (
  ) {}

  ngOnInit (): void {

  }
}
