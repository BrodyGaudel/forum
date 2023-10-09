import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BackendService} from "../../services/backend.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactModel} from "../../models/contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  newContactFormGroup!: FormGroup;

  constructor(private router: Router, private service: BackendService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.newContactFormGroup = this.fb.group( {
      name : this.fb.control(null, [Validators.required, Validators.minLength(3),  Validators.maxLength(255)]),
      from : this.fb.control(null, [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(255)]),
      subject : this.fb.control(null, [Validators.required, Validators.maxLength(255), Validators.minLength(4)]),
      body : this.fb.control(null, [Validators.required, Validators.maxLength(1000), Validators.minLength(5)])
    });
  }

  handleContact() :void {
    let model : ContactModel = new ContactModel();
    model.from = this.newContactFormGroup.value.from;
    model.name = this.newContactFormGroup.value.name;
    model.subject = this.newContactFormGroup.value.subject;
    model.body = this.newContactFormGroup.value.body;
    model.date = new Date();
    this.service.contact(model).subscribe( {
      next : data => {
        alert("Nous avons bien réçu votre message, nous allons vous repondre dans les plus bref délai");
        console.log(data.id)
        this.router.navigateByUrl("/acceuil").then(() => {});
      },
      error : err => {
        console.log(err);
        alert("Problème lors de l'envoie: contactez nous plustot sur karlmouba@gmail.com");
      }
    });
  }



}
