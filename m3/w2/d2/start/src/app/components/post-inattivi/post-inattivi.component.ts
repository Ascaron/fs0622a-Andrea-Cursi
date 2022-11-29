import { Component, OnInit } from '@angular/core';
import { Interface} from 'src/app/models/interface.interface';
import { getPosts } from 'src/app/service/service.service';
import { getPostFiltered } from 'src/app/service/service.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

  post:Interface[]=[];

  ngOnInit(): void {
    this.post=[]
    let t=getPostFiltered(false)
    t.then((res)=>{
      this.post=res
    })
  }

}
