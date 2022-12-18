import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { label: 'Home' },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { label: 'Home' },
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class HomeModule {}
