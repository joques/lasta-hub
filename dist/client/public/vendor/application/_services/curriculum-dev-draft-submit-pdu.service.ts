import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CurriculumDevDraftSubmitPduService {
  private _pduSubmitUrl:string="/api/curriculum-development/draft/submit";
  constructor(private _http: Http) {}

  startNeedAnalysis(programmeCode:String,startDate:Date) {
      let body =JSON.stringify({"devCode":programmeCode,"date":startDate});
      let startHeaders = new Headers({'Content-Type': 'application/json'});
      let startOptions = new RequestOptions({headers: startHeaders,method:"post"});

      return this._http.post(this._pduSubmitUrl, body, startOptions)
          .map((response: Response) => {response= response.json();});

          }




}
