import { Component, Input, OnInit } from '@angular/core'
import { Biography, Image } from 'src/app/shared/model/shared';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() biography!: Biography

}
