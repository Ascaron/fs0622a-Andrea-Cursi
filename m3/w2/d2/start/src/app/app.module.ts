import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';


const ROUTES: Route[]= [
  {path: "Home",
  component: HomeComponent
},
{path: "Post Attivi",
  component: PostAttiviComponent
},
{path: "Post Inattivi",
  component: PostInattiviComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot (ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
