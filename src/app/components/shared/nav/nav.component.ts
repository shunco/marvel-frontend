import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  isUserLogged : boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isUserLogged = sessionStorage.getItem('isLogged') === 'true' ? true : false;
  }
}
