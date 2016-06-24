
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'johnPipe',
    pure:false
})
export class MyPipe implements PipeTransform {
    myvalue:string = "Loading...";
    mypromise:Promise<string>;
   transform(value:any): string {
       //console.log("inside the pipe");
       if (this.mypromise == null) {
        this.mypromise = new Promise((res, rej) => {
            window.setTimeout(() =>{
              //  console.log("resolve the pipe");
                this.myvalue = "it took a while but: "  + value; 
                res(""); 
            }, 5000);
         });
       }
       return this.myvalue;
    }
}


