import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PostListComponent, CommentListComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
