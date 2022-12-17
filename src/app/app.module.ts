import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
//import { RouteEventsService } from './core/services/route-events.service';
import { HomeComponent } from './features/home/home.component';
import { HomeModule } from './features/home/home.module';

const routes: Routes = [{ path: '',  loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }];

const extraOptions: ExtraOptions = { useHash: true }; //{ enableTracing: true, useHash: true };

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes, extraOptions),
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    CoreModule,
  ],
  exports: [RouterModule],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     deps: [RouteEventsService],
  //     useFactory: (routeEventsService: RouteEventsService) => null,
  //   },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
