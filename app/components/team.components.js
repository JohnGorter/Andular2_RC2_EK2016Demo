System.register(['@angular/core', '@angular/router', '../pipes/team.pipes', './form.components', '../services/team.service'], function(exports_1, context_1) {
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
    var core_1, router_1, team_pipes_1, form_components_1, team_service_1;
    var MyDirective, Opstelling, History, EkTeamDetails, EkTeamDetailsPage, EkTeam, EkTeams, EkHeader, EkChatComponent, EkApplication, EkFooter, EKAppRoutes;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (team_pipes_1_1) {
                team_pipes_1 = team_pipes_1_1;
            },
            function (form_components_1_1) {
                form_components_1 = form_components_1_1;
            },
            function (team_service_1_1) {
                team_service_1 = team_service_1_1;
            }],
        execute: function() {
            MyDirective = (function () {
                function MyDirective(element) {
                    this.element = element;
                    console.log("Directive loaded...");
                }
                MyDirective.prototype.sayHi = function () {
                    console.log("hello world");
                };
                MyDirective.prototype.mousover = function () {
                    this.element.nativeElement.style.backgroundColor = this.mycolor;
                };
                MyDirective.prototype.mousout = function () {
                    this.element.nativeElement.style.backgroundColor = null;
                };
                __decorate([
                    core_1.Input('johndiv'), 
                    __metadata('design:type', String)
                ], MyDirective.prototype, "mycolor", void 0);
                __decorate([
                    core_1.HostListener('mouseover'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], MyDirective.prototype, "mousover", null);
                __decorate([
                    core_1.HostListener('mouseout'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], MyDirective.prototype, "mousout", null);
                MyDirective = __decorate([
                    core_1.Directive({
                        selector: '[johndiv]',
                        exportAs: 'johnDir'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], MyDirective);
                return MyDirective;
            }());
            Opstelling = (function () {
                function Opstelling() {
                }
                Opstelling = __decorate([
                    core_1.Component({
                        selector: 'team-opstelling',
                        template: "<p>Opstelling van team hier</p>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Opstelling);
                return Opstelling;
            }());
            History = (function () {
                function History() {
                }
                History = __decorate([
                    core_1.Component({
                        selector: 'team-history',
                        template: "<p>History van team hier</p>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], History);
                return History;
            }());
            EkTeamDetails = (function () {
                function EkTeamDetails(teamservice, routeparams) {
                    this.teamservice = teamservice;
                    this.routeparams = routeparams;
                    this.delete = new core_1.EventEmitter();
                    // routeparams.params.this.route.snapshot.params.id
                    // this.team = teamservice.getTeamByName(routeparams.params["name"])
                }
                EkTeamDetails.prototype.ngOnInit = function () {
                    this.team = this.teamservice.getTeamByName(this.routeparams.snapshot.params["name"]);
                };
                EkTeamDetails.prototype.deleteTeam = function () {
                    this.delete.emit(this.team);
                };
                EkTeamDetails = __decorate([
                    core_1.Component({
                        selector: 'ek-teamdetails',
                        inputs: ['team'],
                        outputs: ['delete'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <div style=\"margin-top:10px;padding:10px;border:1px solid black;\">\n      <h1><ng-content select=\"header\"></ng-content>Opstellingen van team: {{ team.name }} </h1>\n      <a [routerLink]=\"['opstelling']\">Opstelling</a> \n      <a [routerLink]=\"['history']\">History</a>\n      <router-outlet></router-outlet> \n      <button (click)=\"deleteTeam()\">delete</button>\n      <strong><ng-content select=\"footer\"></ng-content></strong>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [team_service_1.TeamService, router_1.ActivatedRoute])
                ], EkTeamDetails);
                return EkTeamDetails;
            }());
            EkTeamDetailsPage = (function () {
                function EkTeamDetailsPage() {
                }
                EkTeamDetailsPage = __decorate([
                    core_1.Component({
                        selector: "teamdetails-page",
                        directives: [EkTeamDetails, router_1.ROUTER_DIRECTIVES],
                        template: "\n        <ek-teamdetails>\n          <header></header>\n          <footer></footer>\n        </ek-teamdetails>\n        <a [routerLink]=\"['/']\">Back to the list</a>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EkTeamDetailsPage);
                return EkTeamDetailsPage;
            }());
            EkTeam = (function () {
                function EkTeam() {
                    this.selected = new core_1.EventEmitter();
                }
                EkTeam.prototype.setSelected = function () {
                    this.selected.emit(this.team);
                };
                EkTeam = __decorate([
                    core_1.Component({
                        selector: 'ek-team',
                        inputs: ['team', 'isselected'],
                        outputs: ['selected'],
                        styles: ['.isSelected { background-color:yellow}'],
                        pipes: [team_pipes_1.MyPipe],
                        template: "\n      <div [class.isSelected]=\"isselected\" (click)=\"setSelected()\">{{ team.name }} </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EkTeam);
                return EkTeam;
            }());
            EkTeams = (function () {
                function EkTeams(teamservice) {
                    this.currentColor = "green";
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
                EkTeams.prototype.setSelected = function (team) {
                    this.teamselected = team;
                };
                Object.defineProperty(EkTeams.prototype, "teams", {
                    get: function () {
                        return this.teamservice.getTeams();
                    },
                    enumerable: true,
                    configurable: true
                });
                EkTeams.prototype.subscribe = function () {
                    var _this = this;
                    if (this.subscriber) {
                        this.subscriber.unsubscribe();
                        this.subscriber = null;
                    }
                    else {
                        this.subscriber = this.teamservice.getTeamChange().subscribe(function (teams) { return _this.teams = teams; });
                    }
                };
                EkTeams.prototype.deleteTeam = function (team) {
                    this.teamservice.deleteTeam(team);
                };
                EkTeams = __decorate([
                    core_1.Component({
                        selector: 'ek-teamlist',
                        directives: [MyDirective, router_1.ROUTER_DIRECTIVES, EkTeam, EkTeamDetails],
                        template: "\n      last updated on: {{ datafreshness }}\n      <ek-team [routerLink]=\"['/details', t.name, 'opstelling']\" [isselected]=\"teamselected == t\" *ngFor=\"let t of teams\" [team]=\"t\" (selected)=\"setSelected($event)\"></ek-team>        \n        <div [johndiv]=\"currentColor\">\n        <div>\n          <a [routerLink]=\"['/create']\">Create a new team</a>\n        </div>\n\n      <input type=\"button\" class=\"btn btn-default\" [value]=\"subscriber?'unsubscribe':'subscribe'\" (click)=\"subscribe()\"/>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [team_service_1.TeamService])
                ], EkTeams);
                return EkTeams;
            }());
            EkHeader = (function () {
                function EkHeader() {
                    this.title = "EK 2016 FINALS";
                }
                EkHeader = __decorate([
                    core_1.Component({
                        selector: 'ek-header',
                        template: "\n      <h1>{{ title }}</h1>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EkHeader);
                return EkHeader;
            }());
            EkChatComponent = (function () {
                function EkChatComponent() {
                }
                EkChatComponent = __decorate([
                    core_1.Component({
                        selector: 'my-chat',
                        template: "\n  <h1>chat with a player:</h1>\n  <hr>\n  <textarea></textarea>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EkChatComponent);
                return EkChatComponent;
            }());
            EkApplication = (function () {
                function EkApplication(router) {
                    this.router = router;
                }
                EkApplication.prototype.startChat = function () {
                    this.router.navigateByUrl("/home(aux:/chat)");
                };
                EkApplication = __decorate([
                    core_1.Component({
                        selector: 'ek-app',
                        directives: [router_1.ROUTER_DIRECTIVES, EkChatComponent, EkHeader, EkTeams, core_1.forwardRef(function () { return EkFooter; }), form_components_1.MyFormComponent],
                        template: "\n      <ek-header></ek-header>\n      <router-outlet></router-outlet><br/><br/>\n      <ek-footer></ek-footer>\n      <a (click)=\"startChat()\">Begin a chat</a>\n      <router-outlet name=\"aux\"></router-outlet> \n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], EkApplication);
                return EkApplication;
            }());
            exports_1("EkApplication", EkApplication);
            EkFooter = (function () {
                function EkFooter() {
                    this.copyright = "All Rights Reserved(c) John Gorter | Info Support bv";
                }
                EkFooter = __decorate([
                    core_1.Component({
                        selector: 'ek-footer',
                        template: "\n      <small> {{ copyright }} </small>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EkFooter);
                return EkFooter;
            }());
            exports_1("EKAppRoutes", EKAppRoutes = [
                { path: 'home', redirectTo: '' },
                { path: '', component: EkTeams },
                { path: 'chat', component: EkChatComponent, outlet: "aux" },
                { path: 'details/:name', component: EkTeamDetailsPage,
                    children: [
                        { path: 'opstelling', component: Opstelling },
                        { path: 'history', component: History }
                    ]
                },
                { path: 'create', component: form_components_1.MyFormComponent },
            ]);
        }
    }
});
//# sourceMappingURL=team.components.js.map