import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterListService } from 'src/app/services/character-list.service';
import { Biography } from 'src/app/shared/model/shared';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
  public recoveredId!: any;
  public biography!: /* Biography */ any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: CharacterListService
  ) { }

  ngOnInit(): void {
    this.recoveredId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.getCharactersId(this.recoveredId).subscribe(finalResult => {
      this.biography = finalResult
    })
    
  }
  
}


