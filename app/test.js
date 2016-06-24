System.register(['reflect-metadata', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var core_1;
    var ICons, JohnConsole, OtherConsole, Program, bindings, injector;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ICons = (function () {
                function ICons() {
                }
                ICons.prototype.log = function (data) { };
                return ICons;
            }());
            JohnConsole = (function (_super) {
                __extends(JohnConsole, _super);
                function JohnConsole() {
                    _super.apply(this, arguments);
                }
                JohnConsole.prototype.log = function (data) {
                    console.log("JOHN: " + data);
                };
                return JohnConsole;
            }(ICons));
            OtherConsole = (function (_super) {
                __extends(OtherConsole, _super);
                function OtherConsole() {
                    _super.apply(this, arguments);
                }
                OtherConsole.prototype.log = function (data) {
                    console.log("OTHER: " + data);
                };
                return OtherConsole;
            }(ICons));
            Program = (function () {
                function Program(console) {
                    this.console = console;
                }
                Program.prototype.logSomething = function () {
                    this.console.log("tadaqqaa");
                };
                return Program;
            }());
            bindings = [core_1.provide(ICons, { useClass: JohnConsole })];
            injector = core_1.ReflectiveInjector.resolveAndCreate(bindings);
            new Program(injector.get(ICons)).logSomething();
            new Program(injector.get(ICons)).logSomething();
            new Program(injector.get(ICons)).logSomething();
            new Program(injector.get(ICons)).logSomething();
            new Program(injector.get(ICons)).logSomething();
            new Program(injector.get(ICons)).logSomething();
        }
    }
});
//# sourceMappingURL=test.js.map