import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {InscriptionModel} from "../../models/inscription.model";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{

  newInscriptionFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,
              private service: BackendService,
              private router: Router) { }
  ngOnInit(): void {
    this.newInscriptionFormGroup = this.fb.group( {
      name : this.fb.control(null, [Validators.required, Validators.minLength(3), Validators.maxLength(256)]),
      firstname : this.fb.control( null, [Validators.required, Validators.minLength(3), Validators.maxLength(256)]),
      email : this.fb.control(null, [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(256)]),
      phone : this.fb.control(null, [Validators.required, Validators.maxLength(16), Validators.minLength(8)]),
      profession : this.fb.control(null, [Validators.required, Validators.maxLength(256), Validators.minLength(4)]),
      type : this.fb.control(null, [Validators.required]),
      secteur : this.fb.control(null, [Validators.required]),
      gender : this.fb.control(null, [Validators.required]),
      website : this.fb.control(null)
    });
  }

  submitInscription() : void {
    let model : InscriptionModel = new InscriptionModel();
    model.email = this.newInscriptionFormGroup.value.email;
    model.name = this.newInscriptionFormGroup.value.name;
    model.firstname = this.newInscriptionFormGroup.value.firstname;
    model.phone = this.newInscriptionFormGroup.value.phone;
    model.secteur = this.newInscriptionFormGroup.value.secteur;
    model.profession = this.newInscriptionFormGroup.value.profession;
    model.website = this.newInscriptionFormGroup.value.website;
    model.enterprise = this.newInscriptionFormGroup.value.type;
    model.gender = this.newInscriptionFormGroup.value.gender;
    model.type = this.newInscriptionFormGroup.value.type;
    this.service.inscription(model).subscribe({
      next : data  => {
        console.log(data.id)
        alert("Bien enregistré !");
      },
      error : err => {
        console.log(err)
        alert("OUPS ! Problème lors de l'enregistrement: veuillez nous contactez");
      }
    });
    this.router.navigateByUrl("/acceuil").then();
  }

}
