// demo DI
import 'reflect-metadata'
import { provide, Inject, ReflectiveInjector } from '@angular/core'

abstract class ICons {
    log(data:string){}
}

class JohnConsole extends ICons {
    log(data:string) {
        console.log("JOHN: " + data);

    }
}
class OtherConsole extends ICons {
    log(data:string) {
        console.log("OTHER: " + data);
    }
}


class Program{
    constructor(private console:ICons){}

    logSomething(){
        this.console.log("tadaqqaa")
    }
}


let bindings = [provide(ICons, {useClass:JohnConsole})];
let injector = ReflectiveInjector.resolveAndCreate(bindings); 

new Program(injector.get(ICons)).logSomething();
new Program(injector.get(ICons)).logSomething();
new Program(injector.get(ICons)).logSomething();
new Program(injector.get(ICons)).logSomething();
new Program(injector.get(ICons)).logSomething();
new Program(injector.get(ICons)).logSomething();