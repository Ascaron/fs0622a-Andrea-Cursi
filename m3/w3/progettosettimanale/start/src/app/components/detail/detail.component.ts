import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/auth-response';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  film!: Movie | any;
  id!: number;
  films!: Movie[];
  token!:string|null

  constructor(private route: ActivatedRoute, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token')
    this.route.paramMap.subscribe(params => {
      let idstring = params.get("id");
      this.id = parseFloat(idstring!);
      this.authSrv.dettaglio(this.id).subscribe(res => {
        this.film = res;
        console.log(this.film);

      });
    });
  }

}
