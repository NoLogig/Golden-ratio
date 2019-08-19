import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatSliderModule
} from '@angular/material';

import { GoldenRatioComponent } from './golden-ratio.component';
import { GoldenRectComponent } from './golden-rect/golden-rect.component';

@NgModule({
  declarations: [
    GoldenRatioComponent,
    GoldenRectComponent
  ],
  imports: [
    LayoutModule, MatIconModule,
    MatButtonModule, MatCardModule, MatInputModule, MatToolbarModule, MatSliderModule
  ],
  providers: [],
})
export class GoldenRatioModule { }
