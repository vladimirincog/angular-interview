import { AfterViewInit, Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Post } from './post-list/post-list.component';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  public selectedPost: Post;
  public posts: Array<Post> = {};
  public comments: any = {};
  public selectedComments = undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.getPosts();
  }

  private async getPosts() {
    this.posts = [];
    this._apiService
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result) => {
        for (let i = 0; i < result.length; i++) {
          const post = result[i];
          this.posts.push({ id: post.id, message: post.title });
        }
      });
  }

  public async postClick($event) {
    this.selectedComments = [];
    const result = await this._apiService
      .get(`https://jsonplaceholder.typicode.com/comments?post=${$event.id}`)
      .pipe(first())
      .toPromise();
    this.selectedComments = result.map((x) => x.body);
  }
}
