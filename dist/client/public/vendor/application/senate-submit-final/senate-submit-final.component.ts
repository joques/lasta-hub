//import files from the angular framework
//import component, ElementRef, input and the oninit method from angular core
import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import the file-upload plugin
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
//import the native angular http and respone libraries
import { Http, Response } from '@angular/http';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
import { SenateSubmitService } from '../_services/senate-submit.service';
import { FORM_DIRECTIVES } from '@angular/forms';
import { RouterUrlSerializer } from '@angular/router';
import {
  RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
  LocationStrategy, HashLocationStrategy,
} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'senate-submit-final',
  templateUrl: 'senate-submit-final.component.html'
})

export class SenateSubmitFinalComponent implements OnInit {
  model: any = {};
  programmeCode: String;
  startDate: Date;
  dataService: SenateSubmitService;
  postMyDataToServer: string;

  constructor(private _dataService: SenateSubmitService, private router: Router) {
    this.dataService = _dataService;
  }


  postDataToServer() {
    this._dataService.startNeedAnalysis(this.programmeCode, this.startDate)
      .subscribe(data => this.postMyDataToServer = JSON.stringify(data), // put the data returned from the server in our variable
      error => alert("Error HTTP Post Service"), // in case of failure show this message
      () => alert("Job Done Post !")//run this code in all cases
      );
  }


  clear() {
    this.model.programmeCode = "";
    this.model.bossubmissionDate = null;
  }

}
