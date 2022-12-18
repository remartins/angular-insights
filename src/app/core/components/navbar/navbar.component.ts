import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private urls: string[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((navigationEvents: any) => {
        //console.log(navigationEvents.url);
        //console.log(navigationEvents);
        
        let url: string = navigationEvents.url;
        let index = 0;

        if (url == '/' || url == '/home' ) {
          index = this.urls.findIndex((u) => u == '/' || u == '/home' );
        } else {
          index = this.urls.findIndex((u) => u == url);
        }

        if (index >= 0) {
          this.urls = this.urls.slice(0, index + 1);
        } else {
          this.urls.push(url);
        }

        console.log(this.urls);
      });
  }
}
