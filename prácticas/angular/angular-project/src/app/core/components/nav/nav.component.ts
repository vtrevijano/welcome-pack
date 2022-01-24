import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public menuItem: MenuItem[] = [
    {label: 'HOME', url: '/'},
    {label: 'LIST', url: '/list'},
    {label: 'ABOUT', url: '/about'},
    {label: 'FORM', url: '/form'},
    {label: 'MYPOSTS', url: '/my-posts'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
