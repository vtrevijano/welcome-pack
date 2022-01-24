import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-about-body',
  templateUrl: './about-body.component.html',
  styleUrls: ['./about-body.component.scss']
})
export class AboutBodyComponent implements OnInit {
  public srcList: any;
  constructor() { }

  ngOnInit(): void {
    let src = forkJoin(
      {
        vtrevijano: ajax.getJSON('https://api.github.com/users/vtrevijano'),
        minsait: ajax.getJSON('https://api.github.com/users/minsait-arquitectura-front'),
        characters: ajax.getJSON('https://rickandmortyapi.com/api/character/1')
      }
    );
    src.subscribe(results => {
      this.srcList = results;
      console.log(this.srcList.vtrevijano)
    })
  }

}
