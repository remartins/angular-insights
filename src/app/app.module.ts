import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
//import { RouteEventsService } from './core/services/route-events.service';
import { HomeModule } from './features/home/home.module';
import { ValueTransferRoutingModule } from './features/value-transfer/value-transfer-routing.module';
import { ValueTransferModule } from './features/value-transfer/value-transfer.module';

const routes: Routes = [{ path: '',  loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }];

const extraOptions: ExtraOptions = { useHash: true }; //{ enableTracing: true, useHash: true };

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes, extraOptions),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HomeModule,
    CoreModule,
    ValueTransferModule,
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
