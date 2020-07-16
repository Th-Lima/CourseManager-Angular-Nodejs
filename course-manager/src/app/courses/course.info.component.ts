import { CourseService } from './course.service';
import { Course } from './course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'course.info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){ }

  ngOnInit(): void {
    this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: error => console.log('Error', error)
    });
  }
  save(): void{
    this.courseService.save(this.course).subscribe({
      next: course => console.log('SALVO COM SUCESSO'),
      error: error => console.log('Error', error)
    });
  }
}
