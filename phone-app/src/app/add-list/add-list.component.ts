import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { SessionService } from "../session.service";
import { PhoneService } from './../phone.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/phones/`,
    authToken: `JWT ${this.session.token}`
  });

	newPhone = {
    name: '',
    brand: '',
    specs: []
  };
  phones;
  feedback: string;
  constructor(
  	private session: SessionService,
  	private phone: PhoneService 
  ) { }

  ngOnInit() {
  	this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    	this.phone.getList()
        .subscribe((phones) => {
          this.phones = phones;
        });
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

  	this.phone.getList()
      .subscribe((phones) => {
        this.phones = phones;
      });
  }

  addSpec(spec) {
    this.newPhone.specs.push(spec);
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newPhone.name);
      form.append('brand', this.newPhone.brand);
      form.append('specs', JSON.stringify(this.newPhone.specs));
    };
    
    this.uploader.uploadAll();
  }

}
