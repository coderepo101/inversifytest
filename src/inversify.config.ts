import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import { IMyTestService } from "./interfaces/IMyTestService"
import { MyTestService } from "./MyTestService"

const myContainer = new Container();

myContainer.bind<IMyTestService>(TYPES.IMyTestService).to(MyTestService);

export { myContainer };