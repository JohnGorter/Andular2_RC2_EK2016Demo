import { Injectable, EventEmitter } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import { Team } from '../models/team.models'

@Injectable()
export class TeamService {
  teams:Team[] = [];
  toevent:EventEmitter<Array<Team>> = new EventEmitter<Array<Team>>(); 
  http:Http;

  constructor(http:Http){
    console.log("inside the constructor of the teamservice...");
    http.get("/teams.json").map(res => res.json()).subscribe(teams =>
    { 
        this.teams = teams;
        this.toevent.emit(this.teams);
    });

    //setInterval(()=> this.teams.push(new Team("test")), 1000); 
  }
  getTeamByName(teamname:string) {
      return this.teams.filter(t => t.name == teamname)[0];
  }

  getTeams(){
    return this.teams;
  }
  getTeamChange() {
    return this.toevent;
  }

saveTeam (team:Team) {
  this.teams.push(team); 
 // this.toevent.emit(this.teams);  
} 

  deleteTeam(team:Team){
 //   this.teams.splice(this.teams.indexOf(team), 1); 
  }
}