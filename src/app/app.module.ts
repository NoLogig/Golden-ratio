import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatSliderModule
} from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoldenRatioComponent } from './golden-ratio/golden-ratio.component';
import { GoldenRectComponent } from './golden-ratio/golden-rect/golden-rect.component';

@NgModule({
  declarations: [
    AppComponent,
    GoldenRatioComponent,
    GoldenRectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule, MatIconModule,
    MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
