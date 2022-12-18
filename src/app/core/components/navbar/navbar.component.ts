import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Step {
  url?: string;
  label?: string;
  index?: number;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  steps: Step[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((navigationEvents: any) => {
        let url: string = navigationEvents.url;
        let index = this.steps.findIndex((step) => step.url == url);

        if (index >= 0) {
          this.steps = this.steps.slice(0, index + 1);
        } else {
          let label = this.route.children[0].snapshot.children[0]
            ? (this.route.children[0].snapshot.children[0].data as any).label
            : (this.route.children[0].snapshot.data as any).label;

          if (url == '/') {
            this.steps.push({
              url: '/home',
              label: 'Home',
              index: this.steps.length,
            });
          } else {
            this.steps.push({ url, label, index: this.steps.length });
          }
        }
      });
  }
}
