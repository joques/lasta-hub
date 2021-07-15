import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserAuthenticationService {
    constructor(private commer: Http) {}
    lastname:string;


    login(loginName: string, loginPass: string) {
        let authHeaders = new Headers({'Content-Type': 'application/json'});
        let authOptions = new RequestOptions({headers: authHeaders});

        return this.commer.post('/api/users/authenticate', {username: loginName, password: loginPass}, authOptions)
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
