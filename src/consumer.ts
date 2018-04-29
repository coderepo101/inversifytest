import { IMyTestService } from "./interfaces/IMyTestService";
import { TYPES } from "./types";
import { inject } from "inversify";
import "reflect-metadata";

export class Consumer{
    private myservice:IMyTestService;
    constructor(@inject(TYPES.IMyTestService) testService: IMyTestService){
        this.myservice = testService;
    }

    public PrintPerson():void{
        this.myservice.CreatePerson("CodeRepo",25);
    }
}