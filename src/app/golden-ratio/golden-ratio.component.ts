import { Component, OnInit } from '@angular/core';

interface IGoldenRatio {
  main: number;
  major: number;
  minor: number;
}

@Component({
  selector: 'app-golden-ratio',
  templateUrl: './golden-ratio.component.html',
  styleUrls: ['./golden-ratio.component.scss']
})
export class GoldenRatioComponent implements OnInit {

  private goldenRatio = 1.61803398875;
  public scaleView: number;

  constructor() { }

  ngOnInit() { }

  goldenMain(main: number): IGoldenRatio | void {
    // if (isNaN(main)) { return throwParaError(); }

    let major = main / this.goldenRatio;
    let minor = main - major;

    return { main, major, minor };
  }

  goldenMajor(major: number): IGoldenRatio | void {
    // if (isNaN(major)) { return throwParaError(); }

    let main = major * this.goldenRatio;
    let minor = main - major;

    return { main, major, minor };
  }

  goldenMinor(minor: number): IGoldenRatio | void {
    // if (isNaN(minor)) { return throwParaError(); }

    let major = minor * this.goldenRatio;
    let main = minor + major;

    return { main, major, minor, };
  }

}
