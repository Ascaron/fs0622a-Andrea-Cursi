import { ColdObservable } from "rxjs/internal/testing/ColdObservable"
import { Post } from "./models/post"

/*var posts:Post[];
fetch('assets/db.json')
.then((response) => response.json())
.then((data) => posts=data);*/

var posts:Post[]=[
  {
      "id":1,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":true,
      "type": "politic"
  },
  {
      "id":2,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":true,
      "type":"politic"
  },
  {
      "id":3,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":true,
      "type":"news"
  },
  {
      "id":4,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":false,
      "type":"news"
  },
  {
      "id":5,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":false,
      "type":"education"
  }
]


export async function getPosts(){
   //return await (await fetch('assets/db.json')).json()
   return posts;
}

export function updatePosts(data:Partial<Post>, id:number){
  posts=posts.map(post=> post.id==id ? {...post, ...data}:post)
  return posts.find(post=>post.id== id) as Post
}
