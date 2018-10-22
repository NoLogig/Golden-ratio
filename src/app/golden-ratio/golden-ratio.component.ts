import { Component, OnInit } from '@angular/core';

interface IGoldenRatio {
  main: number;
  major: number;
  minor: number;
}

export const GOLDEN_RATIO =  1.61803398875;

@Component({
  selector: 'app-golden-ratio',
  templateUrl: './golden-ratio.component.html',
  styleUrls: ['./golden-ratio.component.scss']
})
export class GoldenRatioComponent implements OnInit {

  public scaleView: number;

  constructor() {

    console.log('Main:  %o', this.goldenMain(100));
    console.log('Major: %o', this.goldenMajor(100));
    console.log('Minor: %o', this.goldenMinor(100));

  }

  ngOnInit() { }

    /** Golden Ratio Calculator
     * @param main Main golden ratio segment value
     * @return `IGoldenRatio`: {`main`: `number`; `major`: `number`; `minor`: `number`; }
     */
    goldenMain(main: number): IGoldenRatio | void {

      if (isNaN(main)) { return; }

      let major = main / GOLDEN_RATIO,
          minor = main - major;

      return { main, major, minor };
  }

  /** Golden Ratio Calculator
   * @param major Major golden ratio segment value
   * @return `IGoldenRatio`: {`main`: `number`; `major`: `number`; `minor`: `number`; }
   */
  goldenMajor(major: number): IGoldenRatio | void {

      if (isNaN(major)) { return; }

      let main = major * GOLDEN_RATIO,
          minor = main - major;

      return { main, major, minor };
  }

  /** Golden Ratio Calculator
   * @param minor Minor golden ratio segment value
   * @return `IGoldenRatio`: {`main`: `number`; `major`: `number`; `minor`: `number`; }
   */
  goldenMinor(minor: number): IGoldenRatio | void {

      if (isNaN(minor)) { return; }

      let major = minor * GOLDEN_RATIO,
          main = minor + major;

      return { main, major, minor };
  }

}
