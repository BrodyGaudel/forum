import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit{
  private textIndex: number = 0;
  private interval: any;
  public currentTextActivity!: string;
  private textOptions: string[] = ["REJOIGNEZ LE FORUM GABON-TUNISIE DES AFFAIRES ET DE LA COOPERATION ET EXPLOREZ LES OPPORTUNITES DE COLLABORATION.",
    "EXPLOREZ EGALEMENT LES ECHANGES FRUCTUEUX ET LES PARTENARIATS PROMETTEURS ENTRE LES DEUX NATIONS."];
  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.currentTextActivity = this.textOptions[this.textIndex];
      this.textIndex = (this.textIndex + 1) % this.textOptions.length;
    }, 5000);
  }

}
