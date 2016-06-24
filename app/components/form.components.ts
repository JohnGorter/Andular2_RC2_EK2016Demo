import { Component } from '@angular/core'
import { Team } from '../models/team.models'
import { TeamService } from '../services/team.service'
import { Router } from '@angular/router'

@Component({
    selector:'my-form',
    styles:[`
       span { display:none}
      .ng-pristine.ng-invalid + span { display:none;background-color:green}
      .ng-dirty.ng-invalid + span { display:block; background-color:red}
      `],
    template:`
      <form  #f="ngForm"  (submit)="saveTeam(f.value.team)">
        <div ngModelGroup="team">
          <dl>
            <dt>Name:</dt>
            <dd>
              <input type="text" #me name="name" ngModel required ><span>wel ff invullen!</span>
            </dd>
          </dl>
        </div>
        <input type="submit" value="save" [disabled]="!f.valid"/>
      </form>
    `
})
export class MyFormComponent {
   
    constructor(private teamservice:TeamService, private router:Router) { }
   
    saveTeam(team:Team){
      this.teamservice.saveTeam(team);
      //
      this.router.navigateByUrl("/");
    }
}


@Component({
  selector:'my-child',
  inputs:['data'],
  template:`
      <div *ngFor="let item of data">
      {{ item.make }}
        <ng-content select="mytemplate"></ng-content>
      </div>
  `,
})
export class child{
  data;
}

@Component({
  selector:'my-parent',
  directives:[child],
  template:`
  <my-child [data]="cars" #child>
    <mytemplate>{{ child.data }}</mytemplate>
  </my-child>
  `

})
export class parent{
  cars = [
    {name:'test1', make:'bla2'},
    {name:'test2', make:'bla3'},
    {name:'test3', make:'bla4'}
    ];
}

