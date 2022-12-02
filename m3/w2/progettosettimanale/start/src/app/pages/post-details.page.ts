import { Component, OnInit } from '@angular/core';
import { ActivePostsPage } from './active-posts.page';
import { Post } from '../models/post';
import { getPosts, getPostsById } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  template: `
<div>
  <div class="container mt-5 ms-5 card-body">
    <h5 class="card-title">{{ post.title }}</h5>
    <p class="card-text">{{ post.body }}</p>
    <p class="card-text">Autore: {{ post.author }}</p>
    <p class="card-text">Tipologia: {{ post.type }}</p>

    <ng-content></ng-content>
  </div>
</div>
  `,
  styles: [
  ]
})
export class PostDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute) {}
  post!: Post | any;
  id!: number;
  posts!: Post[];

  async ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = Number(param.id);
    });
    const posts = await getPosts();
    this.posts = posts;

    this.post = await getPostsById(posts, this.id);
  }


  /*ngOnInit(): void {

  }*/

}
