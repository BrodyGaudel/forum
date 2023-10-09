import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  private textIndex = 0;
  private interval: any;
  public currentText!: string;
  private textOptions = ["Bienvenue au Forum Gabon Tunisie des Affaires et de Coopération", "Participez à l'évenement bilatéral le plus attendu en 2024"];

  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.currentText = this.textOptions[this.textIndex];
      this.textIndex = (this.textIndex + 1) % this.textOptions.length;
    }, 3000);
  }

  ngOnDestroy() :void {
    clearInterval(this.interval);
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
