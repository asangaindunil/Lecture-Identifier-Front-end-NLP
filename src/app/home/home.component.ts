import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../services/questions.service';
import { Question } from '../models/question';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questionlist1: any;
  @Input() onequestion: Question
  constructor(private api : ApiService, private activatedRoute:ActivatedRoute) { }
  quiz_id:string;
  items = [];
  finalAnswerSets =[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.quiz_id = params.id;    
      }
    )

  
   this.getQuestions(this.quiz_id);
  }
  getQuestions(id){
    this.api.getQuestions(id).subscribe((data:any)=>{
      this.questionlist1 = data;
      console.log(data)
    })
  }

  setQuestions(qid, answer){
    console.log("ok");
    var data = [];
      data["qid"] = qid;
      data["answer"] = answer.value;
    if(this.items.indexOf(qid) === -1) {
      this.items.push(qid); 
      this.finalAnswerSets.push(data);
  } else {
    this.finalAnswerSets.forEach((element, index) => {
      if (element.qid === qid) {
        this.finalAnswerSets[index] = data;
      };
    });
  }

  console.log(this.finalAnswerSets);

}

  submitAnswers(){
    if (this.finalAnswerSets === undefined || this.finalAnswerSets.length == 0) {
        alert("You are not answers even one question")
    } else {
      
    }
  }

}