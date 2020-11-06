import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

interface Quiz {
  quizID: string;
  name: string;
}
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

export class LandingpageComponent implements OnInit {

  constructor(private api : ApiService,private router:Router) { }
  disableBtn:Boolean =true;
  quiz_id:string;
  ngOnInit(): void {
    this.getAllQuizes()
  }
  quizs:any;

  getAllQuizes(){
    this.api.getQuizes().subscribe((data:any)=>{
      this.quizs = data;
      this.disableBtn =true;
    });
  }
  onChange(value){
    console.log(value);
    if(value != null || value!=""){
      this.quiz_id =value;
      this.disableBtn =false;
    } else {
      this.disableBtn =true;
    }
  }

  submitQuiz(){
    this.router.navigate(['home', {id : this.quiz_id}]);

  }
}