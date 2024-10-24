import { Component, OnInit , AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit  {
  title = 'treasure';
  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Reinitialize AOS and refresh on every route change
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.init({
            duration: 1200,
            once: false
          });
          AOS.refreshHard();  // Force reinitialize if needed
        }, 500); 
      }
    });
  }
}

