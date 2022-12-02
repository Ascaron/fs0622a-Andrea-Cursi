import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { changeStatus, getPosts } from '../posts.service';

@Component({
  template: `
      <div class="container mt-5">
      <div *ngFor="let post of posts; let i=index">
        <div *ngIf="!post.active"
        [ngClass]="{'bg-warning': post.type == 'news', 'bg-info': post.type == 'education',
        'bg-dark': post.type == 'politic', 'text-white': post.type == 'politic'}"
      class="card mb-4">
          <h5 class="card-header">Post</h5>
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">
              {{ post.body }}
            </p>
            <button (click)="onInactivePost(post.id,i, post)" class="btn btn-primary">Cambia stato</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class InactivePostsPage implements OnInit {
  posts!: Post[];

  constructor() {
    getPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  onInactivePost(id: number, i: number, post:Post) {
    //updatePosts({active:true}, id)
    changeStatus(post)
    this.posts.splice(i,1)
  }

  ngOnInit(): void {
  }

}
