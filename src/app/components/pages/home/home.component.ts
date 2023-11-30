import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../../shared/nav/nav.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, NavComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {  

  isUserLogged : boolean = false;
  userLogged: string | null = '';

  constructor(){}

  ngOnInit(): void {
    this.isUserLogged = sessionStorage.getItem('isLogged') === 'true' ? true : false;
    this.userLogged = sessionStorage.getItem('username');
  }
}
