import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HomeModule } from './features/home/home.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

const extraOptions: ExtraOptions = { useHash: true }; //{ enableTracing: true, useHash: true };

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes, extraOptions),
    BrowserModule,
    HomeModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
