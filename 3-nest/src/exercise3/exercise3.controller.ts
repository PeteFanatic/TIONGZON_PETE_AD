import { Controller, Get, Param } from '@nestjs/common';
import { Exercise3Service } from './exercise3.service';

@Controller('exercise3')
export class Exercise3Controller {
    constructor(private readonly e3: Exercise3Service){}

    @Get('/helloWorld/:name')
    helloWorld(@Param('name') name:string): string{
        return this.e3.helloWorld(name);
    }

    @Get('/primeNumber/:given')
    primeNumber(@Param('given')given:string){
        var parsedGiven = parseInt(given);
        return this.e3.primeNumber(parsedGiven);
    }
}
