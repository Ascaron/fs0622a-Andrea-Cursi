import { ColdObservable } from "rxjs/internal/testing/ColdObservable"
import { Post } from "./models/post"

var posts:Post[];

fetch('http://localhost:3000/lista')
.then((response) => response.json())
.then((data) => posts=data);

export async function getPosts(){
   return await (await fetch('http://localhost:3000/lista')).json()
}

/*export function updatePosts(data:Partial<Post>, id:number){
  posts=posts.map(post=> post.id==id ? {...post, ...data}:post)
  return posts.find(post=>post.id== id) as Post
}*/

export function changeStatus(post:Post){
  console.log(post)
fetch(`http://localhost:3000/lista/${post.id}`,{
  method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			body: post.body,
			title: post.title,
			active: !post.active,
      type: post.type,
			id: post.id
		}),
	}).then((response) => {
		return response.json();
	});
}
