import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public menuItem: MenuItem[] = [
    {label: 'home', url: '/'},
    {label: 'list', url: '/list'},
    {label: 'about', url: '/about'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
