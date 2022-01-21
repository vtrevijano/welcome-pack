import { PriorityNamePipe } from './filter-names.pipe';

describe('PriorityNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PriorityNamePipe();
    expect(pipe).toBeTruthy();
  });
});
