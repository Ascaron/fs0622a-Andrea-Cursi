import { Component } from '@angular/core';
import { ToDo } from './models/to-do.interface';
import { getTodos } from './services/to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'start';
  pino!:ToDo[]
  constructor() {
    getTodos().then(todos=>{
      console.log(todos);
      this.pino=todos
      this.completeAll()
      console.log(this.pino)
    })
  }

  completeAll(){
    this.pino = this.pino.map(todo => {
      return{ ...todo, completed:true}
    });
  }
}
