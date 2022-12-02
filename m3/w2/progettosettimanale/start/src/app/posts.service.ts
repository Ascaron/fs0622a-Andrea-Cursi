import { ColdObservable } from "rxjs/internal/testing/ColdObservable"
import { Post } from "./models/post"

var posts: Post[];

fetch('http://localhost:3000/lista')
  .then((response) => response.json())
  .then((data) => posts = data);

export async function getPosts() {
  return await (await fetch('http://localhost:3000/lista')).json()
}

export function changeStatus(post: Post) {
  console.log(post)
  fetch(`http://localhost:3000/lista/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      body: post.body,
      title: post.title,
      active: !post.active,
      type: post.type,
      author: post.author,
      id: post.id
    }),
  }).then((response) => {
    return response.json();
  });
}

export async function getPostsById(posts:Post[], id:number){
  return   posts.find((e) => (e.id ==id))
}
