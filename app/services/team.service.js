System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var TeamService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            TeamService = (function () {
                function TeamService(http) {
                    var _this = this;
                    this.teams = [];
                    this.toevent = new core_1.EventEmitter();
                    console.log("inside the constructor of the teamservice...");
                    http.get("/teams.json").map(function (res) { return res.json(); }).subscribe(function (teams) {
                        _this.teams = teams;
                        _this.toevent.emit(_this.teams);
                    });
                    //setInterval(()=> this.teams.push(new Team("test")), 1000); 
                }
                TeamService.prototype.getTeamByName = function (teamname) {
                    return this.teams.filter(function (t) { return t.name == teamname; })[0];
                };
                TeamService.prototype.getTeams = function () {
                    return this.teams;
                };
                TeamService.prototype.getTeamChange = function () {
                    return this.toevent;
                };
                TeamService.prototype.saveTeam = function (team) {
                    this.teams.push(team);
                    // this.toevent.emit(this.teams);  
                };
                TeamService.prototype.deleteTeam = function (team) {
                    //   this.teams.splice(this.teams.indexOf(team), 1); 
                };
                TeamService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TeamService);
                return TeamService;
            }());
            exports_1("TeamService", TeamService);
        }
    }
});
//# sourceMappingURL=team.service.js.map