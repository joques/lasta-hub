import { Router } from '@angular/router';

//import component, ElementRef, input and the oninit method from angular core
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import the file-upload plugin
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
//import the native angular http and respone libraries
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Model } from './model';
import { FormsModule } from '@angular/forms';
const URL = '/api/reviews/start';


//create the component properties
@Component({
  //define the element to be selected from the html structure.
  selector: 'tlu-ceu-qa-start',
  standalone: true,
  templateUrl: 'tlu-ceu-qa-start.component.html',
  imports: [FormsModule, FileUploadModule]
})
export class TLUCEUQAStartComponent implements OnInit {
  model: Model = new Model();
  tlp: any = null;
  ceu: any = null;
  coll: any = null;

  //declare a property called fileuploader and assign it to an instance of a new fileUploader.
  //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'review-start' });
  //This is the default title property created by the angular cli. Its responsible for the app works
  title = 'app works!';

  ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onBuildItemForm = (item: any, form: any) => {
      form.append('devCode', this.model.programmeCode);
      form.append('date', this.model.consultationDate);
      form.append('recommendto', this.model.recommendto);
      form.append('wil', this.model.wil);


    };
    //overide the onCompleteItem property of the uploader so we are
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {

      if (status == 201) {

        alert("FileUpload: Review session successfully started");

      }
      else {
        alert("FileUpload:" + response);

      }

    };
  }
  //declare a constroctur, so we can pass in some properties to the class, which can be    //accessed using the this variable
  constructor(private http: HttpClient, private el: ElementRef, private router: Router, private _location: Location) {

  }
  @ViewChild('selectedFile') selectedFile: any;
  clear() {
    this.model.programmeCode = "";
    this.model.recommendto = [];
    this.model.wil = false;
    this.model.distance = false;
    this.model.consultationDate = null;
    this.selectedFile.nativeElement.value = '';
    (<HTMLInputElement>document.getElementById("file-name")).value = "";
  }
  updateFile() {
    (<HTMLInputElement>document.getElementById("file-name")).value = "";
    for (var i = 0; i < this.uploader.queue.length; i++) {
      if (i != 0)
        (<HTMLInputElement>document.getElementById("file-name")).value += " ; " + this.uploader.queue[i].file.name;
      else
        (<HTMLInputElement>document.getElementById("file-name")).value = this.uploader.queue[i].file.name;
      console.log(this.uploader.queue[i].file.name);
    }
  }

  close() {
    console.log("closing the window...");
    this._location.back();
  }
  removefile() {
    (<HTMLInputElement>document.getElementById("file-name")).value = "";
  }
  //Make changes to recommedTo when an option is selected
  onChecked(event: Event) {

    const isChecked = (event.target as HTMLInputElement).value

    if (this.model.recommendto.includes(isChecked)) {
      var index = this.model.recommendto.indexOf(isChecked);
      this.model.recommendto.splice(index, 1)
    } else
      this.model.recommendto.push(isChecked)
  }
}