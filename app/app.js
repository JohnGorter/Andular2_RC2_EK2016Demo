System.register(['@angular/http', '@angular/platform-browser-dynamic', '@angular/forms', './components/team.components', './services/team.service', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, platform_browser_dynamic_1, forms_1, team_components_1, team_service_1, router_1;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (team_components_1_1) {
                team_components_1 = team_components_1_1;
            },
            function (team_service_1_1) {
                team_service_1 = team_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(team_components_1.EkApplication, [team_service_1.TeamService,
                forms_1.disableDeprecatedForms(),
                router_1.provideRouter(team_components_1.EKAppRoutes),
                forms_1.provideForms(),
                //  provide(LocationStrategy, {useClass:HashLocationStrategy}),
                http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=app.js.map