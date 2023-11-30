import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./components/shared/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { FooterComponent } from "./components/shared/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, FooterComponent]
})
export class AppComponent {
  title = 'frontend';
}
