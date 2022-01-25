import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  public recoveredId?: string | null
  @Input() biography!: any
  constructor (
  ) {}

  ngOnInit (): void {

  }
}
