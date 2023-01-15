import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz:any;
  questionNumber: number = 0;
  selectedAnswer?:any;
  quizEnd:boolean = false;
  numberOfCorrectAnswers:number = 0;

  constructor(private quizService:QuizService,
              private sanitizer: DomSanitizer,
              private router: Router) {}

  ngOnInit(): void {
    this.quizService.getQuiz().subscribe(response => {
      this.quiz = response;
      this.convertByteArrayToImage();
    })
  }

  convertByteArrayToImage() {
    for(let i=0; i<this.quiz.length; i++) {
      let objectURL = 'data:image/png;base64,' + this.quiz[i].image;
      this.quiz[i].image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
  }

  onAnswerSelect(answer:any) {
    if(this.selectedAnswer) {
      return;
    }
    this.selectedAnswer = answer;
    if(this.correctAnswered()) {
      this.numberOfCorrectAnswers++;
    }
  }

  correctAnswered() {
    if(this.selectedAnswer === this.quiz[this.questionNumber].rightAnswer) {
      return true;
    }
    return false;
  }

  loadNextQuestion() {    
    this.questionNumber++;
    this.selectedAnswer = null;
    if(this.questionNumber === 5) {
      this.quizEnd = true;
    }
  }

  reset() {
    window.location.reload();
  }

}
