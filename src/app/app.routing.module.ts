import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/view-login.component';
import { DashboardComponent } from './views/dashboard/view-dashboard.component';
import {ChooseModeComponent} from './views/choose-mode/view-choose-mode.component';
import {GoodbyeComponent} from './views/goodbye/view-goodbye.component';
import {TeacherCreateLessonComponent} from './views/teacher-create-lesson/view-teacher-create-lesson.component';
import {TeacherWordsPanelComponent} from './views/teacher-words-panel/view-teacher-words-panel.component';
import {TeacherAddStudentsComponent} from './views/teacher-add-students/view-teacher-add-students.component';
import {TeacherSeeProgressComponent} from './views/teacher-see-progress/view-teacher-see-progress.component';
import { RegisterComponent } from './views/register/view-register.component';
import { ProgressComponent } from './views/progress/view-progress.component';

import { AuthGuard } from './common/auth.guard';

// Define the routes
export const routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher-words-panel',
    component: TeacherWordsPanelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher-create-lesson',
    component: TeacherCreateLessonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher-see-progress',
    component: TeacherSeeProgressComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'teacher-add-students',
    component: TeacherAddStudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {  path: 'choose-mode',
    component: ChooseModeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'progress',
    component: ProgressComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'goodbye',
    component: GoodbyeComponent
  },
  { //Redirect urls not found at root
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes)
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
