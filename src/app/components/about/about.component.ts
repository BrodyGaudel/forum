import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  gotoInscriptionComponent() : void {
    this.router.navigate(["inscription"]).then();
  }

  closeMenuOnClick() :void {
    const toggleButton : HTMLElement = document.querySelector('.navbar-toggler') as HTMLElement;
    const menuDiv : HTMLElement = document.querySelector('#navbarSupportedContent') as HTMLElement;
    if (toggleButton && menuDiv) {
      const isExpanded : boolean = menuDiv.classList.contains('show');
      if (isExpanded) {
        toggleButton.click();
      }
    }
  }
}
