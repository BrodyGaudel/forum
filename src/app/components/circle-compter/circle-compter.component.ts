import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-compter',
  templateUrl: './circle-compter.component.html',
  styleUrls: ['./circle-compter.component.css']
})
export class CircleCompterComponent implements OnInit {
  visitors: number = 0;
  exhibitors: number = 0;
  conferences: number = 0;
  b2b: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.incrementNumbers();
  }

  incrementNumbers() : void {
    const targetVisitors  = 3000;
    const targetExhibitors = 300;
    const targetConferences = 30;
    const targetB2B = 100;

    const interval = 200; // Milliseconds between each increment
    const totalIterations = 60; // Total number of iterations

    let iteration = 0;
    const incrementInterval = setInterval(() :void => {
      this.visitors += Math.ceil(targetVisitors / totalIterations);
      this.exhibitors += Math.ceil(targetExhibitors / totalIterations);
      this.conferences += Math.ceil(targetConferences / totalIterations);
      this.b2b += Math.ceil(targetB2B / totalIterations);

      iteration++;
      if (iteration === totalIterations) {
        // Ensure that the final numbers are exact targets
        this.visitors = targetVisitors;
        this.exhibitors = targetExhibitors;
        this.conferences = targetConferences;
        this.b2b = targetB2B;

        clearInterval(incrementInterval);
      }
    }, interval);
  }


}
