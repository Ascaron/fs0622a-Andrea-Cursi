import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { getPosts, changeStatus } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts; let i=index">
        <div *ngIf="post.active"
        [ngClass]="{'bg-warning': post.type == 'news', 'bg-info': post.type == 'education',
        'bg-dark': post.type == 'politic', 'text-white': post.type == 'politic'}"
        class="card mb-4">
          <h5 class="card-header"><span appSfondo>Post</span></h5>
          <div class="card-body">
            <h5 class="card-title">{{ post.title | uppercase }}</h5>
            <p class="card-text">
              {{ post.body }}
            </p>
            <button (click)="onActivePost(post.id,i, post)" class="btn btn-primary">Cambia stato</button>
            <button class="btn btn-primary mx-1" [routerLink]="['/active-posts',post.id]" routerLinkActive="active">Dettaglio</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ActivePostsPage implements OnInit {
  posts!: Post[];
  constructor() {
    getPosts().then((posts) => {
      this.posts = posts;
    });
  }

  onActivePost(id: number, i: number, post:Post) {
    changeStatus(post)
    this.posts.splice(i,1)
  }

  ngOnInit(): void { }
}
