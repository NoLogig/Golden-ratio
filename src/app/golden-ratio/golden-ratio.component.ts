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

  constructor() {

    console.log('Main:  %o', this.goldenMain(100));
    console.log('Major: %o', this.goldenMajor(100));
    console.log('Minor: %o', this.goldenMinor(100));

  }

  ngOnInit() { }

  //  @param main Represents the "main" segment
  goldenMain(main: number): IGoldenRatio { // | void {
    // if (isNaN(main)) { return throwParaError(); }
    let major = main / this.goldenRatio;
    let minor = main - major;

    return { main, major, minor };
  }

  //  @param major Represents the "major" segment
  goldenMajor(major: number): IGoldenRatio { // | void {
    // if (isNaN(major)) { return throwParaError(); }
    let main = major * this.goldenRatio;
    let minor = main - major;

    return { main, major, minor };
  }

  //  @param minor Represents the "minor" segment
  goldenMinor(minor: number): IGoldenRatio { // | void {
    // if (isNaN(minor)) { return throwParaError(); }
    let major = minor * this.goldenRatio;
    let main = minor + major;

    return { main, major, minor, };
  }

}
