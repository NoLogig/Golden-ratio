import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatTabsModule, MatCheckboxModule,
MatButtonToggleModule, MatExpansionModule, MatFormFieldModule, MatDatepickerModule,
MatNativeDateModule, MatSlideToggleModule, MatSortModule, MatSidenavModule, MatProgressBarModule,
MatSelectModule, MatCardModule, MatInputModule, MatButtonModule, MatListModule, MatIconModule, MatSliderModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule, MatInputModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule, LayoutModule, MatSliderModule,
    MatToolbarModule, MatTabsModule, MatCheckboxModule, MatButtonToggleModule, MatExpansionModule, MatFormFieldModule, MatDatepickerModule,
    MatNativeDateModule, MatSlideToggleModule, MatSortModule, MatSidenavModule, MatSelectModule, MatProgressBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
