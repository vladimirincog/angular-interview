import { Component, OnInit, Input,OnChanges , SimpleChange } from '@angular/core';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnChanges {

  @Input() comments: Array<string> = [];

  constructor() { 

  }
 public ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
   console.log(changes);
     
    }
}