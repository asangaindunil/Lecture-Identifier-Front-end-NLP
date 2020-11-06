import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  question:any;

  constructor(private api : ApiService) { }

  getQuestions(id){
    this.api.getQuestions(id).subscribe((data:any)=>{
      this.question = data;
    })
    return this.question;

  }

}
