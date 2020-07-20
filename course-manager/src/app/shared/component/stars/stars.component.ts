import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges{

  @Input()
  rating = 0;
  starWidth;

  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5;
  }
}
