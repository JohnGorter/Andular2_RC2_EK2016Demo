System.register(['@angular/core', '../services/team.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, team_service_1, router_1;
    var MyFormComponent, child, parent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (team_service_1_1) {
                team_service_1 = team_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MyFormComponent = (function () {
                function MyFormComponent(teamservice, router) {
                    this.teamservice = teamservice;
                    this.router = router;
                }
                MyFormComponent.prototype.saveTeam = function (team) {
                    this.teamservice.saveTeam(team);
                    //
                    this.router.navigateByUrl("/");
                };
                MyFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-form',
                        styles: ["\n       span { display:none}\n      .ng-pristine.ng-invalid + span { display:none;background-color:green}\n      .ng-dirty.ng-invalid + span { display:block; background-color:red}\n      "],
                        template: "\n      <form  #f=\"ngForm\"  (submit)=\"saveTeam(f.value.team)\">\n        <div ngModelGroup=\"team\">\n          <dl>\n            <dt>Name:</dt>\n            <dd>\n              <input type=\"text\" #me name=\"name\" ngModel required ><span>wel ff invullen!</span>\n            </dd>\n          </dl>\n        </div>\n        <input type=\"submit\" value=\"save\" [disabled]=\"!f.valid\"/>\n      </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [team_service_1.TeamService, router_1.Router])
                ], MyFormComponent);
                return MyFormComponent;
            }());
            exports_1("MyFormComponent", MyFormComponent);
            child = (function () {
                function child() {
                }
                child = __decorate([
                    core_1.Component({
                        selector: 'my-child',
                        inputs: ['data'],
                        template: "\n      <div *ngFor=\"let item of data\">\n      {{ item.make }}\n        <ng-content select=\"mytemplate\"></ng-content>\n      </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], child);
                return child;
            }());
            exports_1("child", child);
            parent = (function () {
                function parent() {
                    this.cars = [
                        { name: 'test1', make: 'bla2' },
                        { name: 'test2', make: 'bla3' },
                        { name: 'test3', make: 'bla4' }
                    ];
                }
                parent = __decorate([
                    core_1.Component({
                        selector: 'my-parent',
                        directives: [child],
                        template: "\n  <my-child [data]=\"cars\" #child>\n    <mytemplate>{{ child.data }}</mytemplate>\n  </my-child>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], parent);
                return parent;
            }());
            exports_1("parent", parent);
        }
    }
});
//# sourceMappingURL=form.components.js.map