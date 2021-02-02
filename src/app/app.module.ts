import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    FormsModule,
    PagesModule,
    TransferHttpCacheModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
