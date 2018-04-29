import 'jest';
import { IMyTestService } from './interfaces/IMyTestService';
import { Consumer } from './consumer';

test("check the output correctness",()=>{
    const Mock = jest.fn<IMyTestService>(()=>({
        CreatePerson : jest.fn((string,number):void=>{})
    }));

    const mock = new Mock();
    const consumer = new Consumer(mock);

    consumer.PrintPerson();
    expect(mock.CreatePerson).toHaveBeenCalledWith("CodeRepo",25);
});