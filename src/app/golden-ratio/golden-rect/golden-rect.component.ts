import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-golden-rect',
  templateUrl: './golden-rect.component.html',
  styleUrls: ['./golden-rect.component.scss']
})
export class GoldenRectComponent implements OnInit {

  @Input() repeats: number;

  constructor() { }

  ngOnInit() {
    this.repeats -= 1;
  }

}
