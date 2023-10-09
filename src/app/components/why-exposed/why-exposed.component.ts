import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-why-exposed',
  templateUrl: './why-exposed.component.html',
  styleUrls: ['./why-exposed.component.css']
})
export class WhyExposedComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  gotoInscription() :void {
    this.router.navigate(["inscription"]).then();
  }
}
