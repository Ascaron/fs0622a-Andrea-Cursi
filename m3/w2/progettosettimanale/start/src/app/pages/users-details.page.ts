import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';
import { getUsers, getUsersById } from '../users.service';



@Component({
  selector: 'app-users-details',
  template: `
<p class="card-text">Nome utente: {{user.name}}</p>
<p class="card-text">Email utente: {{user.email}}</p>
<p class="card-text">Ruolo utente: {{user.role}}</p>
  `,
  styles: [
  ]
})


export class UsersDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  user!: Users | any

  id!: number;


  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = Number(param.id);
      this.recUt(this.id)
    });
  }

  async recUt(id:number){
    this.user! = await getUsersById(id!);
  }

}
