import { injectable } from "inversify";
import { IMyTestService } from "./interfaces/IMyTestService";

@injectable()
export class MyTestService implements IMyTestService{
    public CreatePerson(name:string,age:number){
        console.log("name: "+ name +", age: "+age.toString())
    }
}