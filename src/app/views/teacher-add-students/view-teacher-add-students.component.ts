import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { SidePanelLessonsComponent } from '../../bars/side-panel-lessons/side-panel-lessons.component';


@Component({
  selector: 'teacher-add-students',
  templateUrl: './view-teacher-add-students.component.html'
})
export class TeacherAddStudentsComponent{

  chosenLesson: string;
  constructor(private _loginService: LoginService) {}

  ngOnInit() {
    this._loginService.checkLoggedIn();
  }
  handleLessonChosen(x:string){
    this.chosenLesson=x;
    /*
    students2lessons
    findAll
    in: lesson_name
    out: [studentID]

    students
    finaAll
    out: [students]

    jeśli student znajduje się na pierwszej i drugiej liście, to obok jego nazwiska przycisk "remove" wpp "add"
    */
  }
}
