import { PipeCriadoPipe } from './pipe-criado.pipe';

describe('PipeCriadoPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeCriadoPipe();
    expect(pipe).toBeTruthy();
  });
});
