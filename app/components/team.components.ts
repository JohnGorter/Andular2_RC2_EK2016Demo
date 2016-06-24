import { HostListener, ElementRef, Directive, OnInit, forwardRef, Injectable, Component, Input, EventEmitter, provide, Pipe, PipeTransform } from '@angular/core';
import { Http, Response, HTTP_PROVIDERS } from '@angular/http';
// import { RouteConfig, RouterOutlet, ROUTER_PROVIDERS, RouterLink, Router, RouteParams } from '@angular/router-deprecated'
import { ROUTER_DIRECTIVES, ActivatedRoute, provideRouter, RouterConfig, Router } from '@angular/router'

import { MyPipe } from '../pipes/team.pipes'
import { MyFormComponent } from './form.components'
import { TeamService } from '../services/team.service'
import { Team } from '../models/team.models'


@Directive({
   selector:'[johndiv]',
   exportAs:'johnDir'

})
class MyDirective {
  @Input('johndiv') mycolor:string;
  constructor(private element:ElementRef){
    console.log("Directive loaded...");
  }
  sayHi(){
    console.log("hello world");
  }
  @HostListener('mouseover') mousover(){
    this.element.nativeElement.style.backgroundColor = this.mycolor;
  }
  @HostListener('mouseout') mousout(){
    this.element.nativeElement.style.backgroundColor = null;

  }
}

@Component({
  selector:'team-opstelling',
  template:`<p>Opstelling van team hier</p>`
})
class Opstelling {}

@Component({
  selector:'team-history',
  template:`<p>History van team hier</p>`
})
class History {

}
@Component({
    selector:'ek-teamdetails',
    inputs:['team'],
    outputs:['delete'],
    directives:[ROUTER_DIRECTIVES],
    template:`
    <div style="margin-top:10px;padding:10px;border:1px solid black;">
      <h1><ng-content select="header"></ng-content>Opstellingen van team: {{ team.name }} </h1>
      <a [routerLink]="['opstelling']">Opstelling</a> 
      <a [routerLink]="['history']">History</a>
      <router-outlet></router-outlet> 
      <button (click)="deleteTeam()">delete</button>
      <strong><ng-content select="footer"></ng-content></strong>
      </div>
    `
})
class EkTeamDetails implements OnInit{
 
  delete:EventEmitter<Team> = new EventEmitter<Team>(); 
  team:Team;
  constructor(private teamservice:TeamService, private routeparams:ActivatedRoute){
    // routeparams.params.this.route.snapshot.params.id
    // this.team = teamservice.getTeamByName(routeparams.params["name"])
  }

  ngOnInit(){
   this.team = this.teamservice.getTeamByName(this.routeparams.snapshot.params["name"])
  }
  
  deleteTeam(){
      this.delete.emit(this.team); 
  }
}

@Component({
  selector:"teamdetails-page",
  directives:[EkTeamDetails, ROUTER_DIRECTIVES],
  template:`
        <ek-teamdetails>
          <header></header>
          <footer></footer>
        </ek-teamdetails>
        <a [routerLink]="['/']">Back to the list</a>
  `
})
// @RouteConfig([
//   { path:'/home', name:'Opstelling', component:Opstelling, useAsDefault: true },
//   { path:'/hist', name:'History', component:History },
// ])
class EkTeamDetailsPage {

}

@Component({
    selector:'ek-team',
    inputs:['team', 'isselected'],
    outputs:['selected'],
    styles:['.isSelected { background-color:yellow}'],
    pipes:[MyPipe],
    template:`
      <div [class.isSelected]="isselected" (click)="setSelected()">{{ team.name }} </div>
    `
})
class EkTeam{
  team:Team;
  isselected:boolean;
  selected:EventEmitter<Team> = new EventEmitter<Team>();
  constructor(){
  } 
  setSelected() {
      this.selected.emit(this.team); 
  }
}

@Component({
    selector:'ek-teamlist',
    directives:[MyDirective, ROUTER_DIRECTIVES, EkTeam, EkTeamDetails],
    template:`
      last updated on: {{ datafreshness }}
      <ek-team [routerLink]="['/details', t.name, 'opstelling']" [isselected]="teamselected == t" *ngFor="let t of teams" [team]="t" (selected)="setSelected($event)"></ek-team>        
        <div [johndiv]="currentColor">
        <div>
          <a [routerLink]="['/create']">Create a new team</a>
        </div>

      <input type="button" class="btn btn-default" [value]="subscriber?'unsubscribe':'subscribe'" (click)="subscribe()"/>
      </div>
    `
})
class EkTeams{
  currentColor:string = "green";
 /// teams:Team[];
  teamservice:TeamService; 
  teamselected:Team;
 // datafreshness:string;
  subscriber;
  subscribing:boolean;

  constructor(teamservice:TeamService){
    this.teamservice = teamservice;
  //  this.teams = teamservice.getTeams(); 
  //  this.datafreshness = new Date().toLocaleTimeString(); 
  //  this.subscriber = this.teamservice.getTeamChange().subscribe(teams =>
  //  {
  //     this.teams = teams;
  //     this.datafreshness = new Date().toLocaleTimeString(); 
  //  }
  //  );
  } 
  setSelected(team:Team){
      this.teamselected = team;
  }

  get teams() {
      return this.teamservice.getTeams();
  }
  
  subscribe(){
    if (this.subscriber){
      this.subscriber.unsubscribe();
      this.subscriber = null;
    } else { 
      this.subscriber = this.teamservice.getTeamChange().subscribe(teams =>  this.teams = teams);
    }
  }

  deleteTeam(team:Team){
     this.teamservice.deleteTeam(team); 
  }
}

@Component({
    selector:'ek-header',
    template:`
      <h1>{{ title }}</h1>
    `
})
class EkHeader{
  title:string = "EK 2016 FINALS"
}



@Component({
  selector:'my-chat',
  template:`
  <h1>chat with a player:</h1>
  <hr>
  <textarea></textarea>
  `
})
class EkChatComponent{}

@Component({
    selector:'ek-app',
    directives:[ROUTER_DIRECTIVES, EkChatComponent, EkHeader, EkTeams, forwardRef(() => EkFooter), MyFormComponent],
    template:`
      <ek-header></ek-header>
      <router-outlet></router-outlet><br/><br/>
      <ek-footer></ek-footer>
      <a (click)="startChat()">Begin a chat</a>
      <router-outlet name="aux"></router-outlet> 
    `
})
// @RouteConfig([
//   { path:'/', name:'Home', component:EkTeams},
//   { path:'/create', name:'NewTeam', component:MyFormComponent},
//   { path:'/details/:name/...', name:'Details', component:EkTeamDetailsPage},
//   { aux:'/chat', name:'Chat', component:EkChatComponent}
// ])
export class EkApplication{
   constructor(private router:Router){}
   startChat() {
      this.router.navigateByUrl("/home(aux:/chat)");
   }
}

@Component({
    selector:'ek-footer',
    template:`
      <small> {{ copyright }} </small>
    `
})
class EkFooter{
  copyright:string = "All Rights Reserved(c) John Gorter | Info Support bv"
}


export const EKAppRoutes: RouterConfig = [
  { path:'home', redirectTo:'' },
  { path:'', component: EkTeams },
  { path:'chat', component:EkChatComponent, outlet:"aux"},
  { path: 'details/:name', component: EkTeamDetailsPage,
    children: [
      { path: 'opstelling',  component: Opstelling },
      { path: 'history',     component: History }
    ] 
  },
  { path: 'create', component: MyFormComponent },
  
]
