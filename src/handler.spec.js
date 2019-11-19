import { handle } from './handler';

test('to return bar', () => {
  const foo = handle();
  expect(foo).toBe('bar');
});
