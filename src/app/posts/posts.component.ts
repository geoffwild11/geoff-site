import { Component, OnInit } from '@angular/core';

import { POSTS } from './mock-posts';
import { Post } from './posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Post[];

  constructor() {
    this.posts = POSTS;
  }

  ngOnInit() {
  }

}
