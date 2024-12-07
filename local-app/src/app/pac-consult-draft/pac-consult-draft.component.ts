//import component, ElementRef, input and the oninit method from angular core
import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
//import the file-upload plugin
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
//import the native angular http and respone libraries
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const URL = '/api/consultations/pac/final-draft';

//create the component properties
@Component({
  //define the element to be selected from the html structure.
  selector: 'pac-consult-draft',
  standalone: true,
  //location of our template rather than writing inline templates.
  templateUrl: 'pac-consult-draft.component.html',
  imports: [FormsModule, FileUploadModule]
})
export class PacConsultDraftComponent implements OnInit {
  model: any = {};
  devCode: String;
  decision: String;
  //  form: FormGroup;

  //declare a property called fileuploader and assign it to an instance of a new fileUploader.
  //pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'final-draft' });
  //This is the default title property created by the angular cli. Its responsible for the app works
  title = 'app works!';

  ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onBuildItemForm = (item: any, form: any) => {
      form.append('devCode', this.model.programmeCode);
      form.append('decission', this.decision);
    };
    //overide the onCompleteItem property of the uploader so we are
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("submission:successfully uploaded:", item, status, response);
      if (status == 201) {

        alert("FileUpload: successfully");

      }
      else {
        alert("FileUpload:" + response);

      }

    };
  }
  //declare a constroctur, so we can pass in some properties to the class, which can be    //accessed using the this variable
  constructor(private http: HttpClient, private el: ElementRef) {

  }
  @ViewChild('selectedFile') selectedFile: any;
  clear() {
    this.model.programmeCode = "";
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
  setDecission(dec: string) {
    this.decision = dec;
    console.log(this.decision);
  }
  removefile() {
    (<HTMLInputElement>document.getElementById("file-name")).value = "";
  }


}