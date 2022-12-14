import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { Movie } from 'src/app/interface/auth-response';


import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newFilm: {
    poster_path: string;

  } = {
      poster_path: ''
    }

  films: Movie[] | undefined;
  token!: string | null

  constructor(private authSrv: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.recupera()
  }


  recupera() {
    this.authSrv.recuperaFilm().subscribe(res => {
      this.films = res
      console.log(this.films);
    })
  }

  logout() {
    this.authSrv.logout()

  }
}
