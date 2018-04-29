import 'jest';
import { IMyTestService } from './interfaces/IMyTestService';
import { Consumer } from './consumer';
const Mock = jest.fn<IMyTestService>();
test("check the output correctness",()=>{
    const mock = new Mock();
    const consumer = new Consumer(mock);
    consumer.PrintPerson();
    expect(mock.CreatePerson).toHaveBeenCalledWith(["CodeRepo",25]);
});