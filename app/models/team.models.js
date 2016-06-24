System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Team;
    return {
        setters:[],
        execute: function() {
            // model
            Team = (function () {
                function Team(name) {
                    this.name = name;
                }
                return Team;
            }());
            exports_1("Team", Team);
        }
    }
});
//# sourceMappingURL=team.models.js.map