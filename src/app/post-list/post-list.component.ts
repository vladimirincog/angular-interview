import { Component, EventEmitter, Output } from '@angular/core';

export class Post {
  id: number;
  message: string;
}

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent  {
  posts: Array<Post> = [];
  public selectedPost: Post;

  @Output() postClick: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() { }

   postClickLocal($event, post){
     $event.stopPropagation();
     $event.preventDefault();
     this.selectedPost = post;
     this.postClick.emit(post)
   }

}