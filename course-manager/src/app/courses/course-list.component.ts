import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{

  _courses: Course[] = [];
  _filterBy: string;
  filteredCourses: Course[] = [];

  constructor(private courseService: CourseService){ }

  ngOnInit(): void {
   this.retrieveAll();
  }

  retrieveAll(): void{
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: error => {
        console.log('Error', error);
      }
    });
  }

  set filter(value: string){
    this._filterBy = value;
    this.filteredCourses =
    this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
  get filter(){
    return this._filterBy;
  }

}
