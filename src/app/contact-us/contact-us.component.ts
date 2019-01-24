import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { ContactUsModel } from '../contact-us/contact-us.model';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      username: new FormControl(null,
      [Validators.required, this.cekIsEmpty]),
      usermail: new FormControl(null,
      [Validators.required]),
      usermsg: new FormControl(null, [])
    });
  }

  kirim(){
    const contactUsModel = new ContactUsModel;

    contactUsModel.userName = this.contactForm.get('username').value;
    contactUsModel.userMail = this.contactForm.get('usermail').value;
    contactUsModel.userMsg = this.contactForm.get('usermsg').value;
    
    console.log(contactUsModel);

  }

  cekIsEmpty(control: FormControl): {[s: string]: boolean} {
    console.log('sebelum ' + control.value);
    if (control.value && control.value.trim().length === null){
      console.log('sesudah ' + control.value);
      return { 'kosong': true };
    }
    return null;
  }

}
