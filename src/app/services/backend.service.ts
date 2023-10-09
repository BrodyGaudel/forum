import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {InscriptionModel} from "../models/inscription.model";
import {Observable} from "rxjs";
import {ContactModel} from "../models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private host: string = 'http://localhost:8888/api/web/';

  constructor(private http: HttpClient) { }

  public inscription(model: InscriptionModel) :Observable<InscriptionModel> {
    return this.http.post<InscriptionModel>(this.host +'inscription', model);
  }

  public contact(contactModel: ContactModel) :Observable<ContactModel>{
    return this.http.post<ContactModel>(this.host + 'contact', contactModel);
  }

}
