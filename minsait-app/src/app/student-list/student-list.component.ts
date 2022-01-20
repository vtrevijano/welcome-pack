import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent implements OnInit {
  title: string;
  avengers = ['Spiderman','Iron-man', 'Hulk', 'Thor'];
  name='upgraders';

  constructor() {
    /* console.log(this.title); */
    this.title = 'Listado de Alumnos';
    console.log('constructor finalizado');
  }

  ngOnInit() {
    console.log(this.title);
    console.log('ngOnInit finalizado');
    
  }
}
