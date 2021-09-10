import { Injectable } from '@nestjs/common';

@Injectable()
export class Exercise3Service {
    helloWorld(name:string){
        return "Hello, "+ name;
    }

    primeNumber(given:number){
        //let num = 9;
        let i = 1;
        let count = 0;
        
        if(given==1){
            return console.log(given + ": Not a Prime Number nor Composite.");
        }
        else{
            for (i = 1; i <= given; i++) {
                if (given % i == 0)
                    count++;
            }

            if (count == 2) {
                return console.log(given + ": Prime Number");
            }

            else{
                return console.log(given+ ": not a Prime Number");
            }
        }
    }
}
