import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forumgabontunisie';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  gotoInscriptionComponent() :void{
    this.router.navigate(["inscription"]).then();
  }

  gotoContactComponent() :void{
    this.router.navigate(["contact"]).then();
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
