import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule
} from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoldenRatioComponent } from './golden-ratio/golden-ratio.component';

@NgModule({
  declarations: [
    AppComponent,
    GoldenRatioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule, MatIconModule,
    MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
