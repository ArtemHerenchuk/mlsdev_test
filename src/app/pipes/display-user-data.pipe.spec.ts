import { DisplayUserDataPipe } from './display-user-data.pipe';

describe('CheckUserDataPipe', () => {
  it('create an instance', () => {
    const pipe = new DisplayUserDataPipe();
    expect(pipe).toBeTruthy();
  });
});
