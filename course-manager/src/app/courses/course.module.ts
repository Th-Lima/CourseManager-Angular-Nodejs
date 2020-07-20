import { StarsComponent } from './../stars/stars.component';
import { ReplacePipe } from './../pipe/replace.pipe';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list.component';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course.info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule {

}
