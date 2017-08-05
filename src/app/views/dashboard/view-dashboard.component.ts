import {Component} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import { SidePanelLessonsComponent } from '../../bars/side-panel-lessons/side-panel-lessons.component';


@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'view-dashboard.component.html'
})

export class DashboardComponent{
  lessons: word[];
  lessonsFiltered: word[];
  word: word;
  response: string;
  ok: boolean;
  user: string;
  clicked: boolean;
  chosenLesson: string;
  mode: number;
  constructor(private _router: Router,private _loginService: LoginService){
    this.response=null;
    this.lessons = [{ eng: "one", pol: "jeden", id: "1", lesson: "words1" },
                    { eng: "two", pol: "dwa", id: "2", lesson: "words1" },
                    { eng: "three", pol: "trzy", id: "3", lesson: "words1" },
                    { eng: "four", pol: "cztery", id: "4", lesson: "words1" },
                    { eng: "dog", pol: "pies", id: "5", lesson: "words2" },
                    { eng: "cat", pol: "kot", id: "6", lesson: "words2" }];
    this.chosenLesson='null';
    this.ok=null;
    this.user=this._loginService.getUserName();
    this.clicked=false;
    this.mode=this._loginService.getMode();
  }
  //nie pozwala przejść do dashboard bez logowania
  ngOnInit(){
    this._loginService.checkLoggedIn();
  }
  handleLessonChosen(x:string){
    if(this.chosenLesson=='null' || ( this.chosenLesson!='null' && this.clicked==true)){
        if(x!=this.chosenLesson){
        this.chosenLesson=x;
        this.lessonsFiltered=this.lessons.filter((l:word) => l.lesson===this.chosenLesson);
      }
        this.nextword();
      }
}
  assign(x:string){
    if(!this.clicked){
      this.clicked=true;
      for(var i=0;i<this.lessons.length;i++){
        if(x==this.lessons[i].pol){
          this.response=this.lessons[i].pol;
        }
      }
     this.ok=this.response==this.word.pol ? true : false;
   }
  }
  nextword(){
    this.clicked=false;
    this.word=this.lessonsFiltered[Math.floor(Math.random()*this.lessonsFiltered.length)];
    this.response=null;
    this.ok=null;
  }
}
interface word {
  pol:string;
  eng:string;
  id:string;
  lesson:string;
}