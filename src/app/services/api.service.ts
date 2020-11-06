import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient )  {
   

  }
  baseurl = environment.apiEndPoint;
 //  baseurl = 'http://localhost:8000';


  
  getQuizes() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    return this.http.get(this.baseurl+'/get-quiz_details', { headers: headers });

  }

  getQuestions(id) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');

    return this.http.get(this.baseurl+'/get-questions_by_quiz/'+id, { headers: headers });

  }

}
