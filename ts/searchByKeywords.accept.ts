import t from 'assert';
import { searchByKeywords } from './index.js';

test('shape', () => {
  t.strictEqual(typeof searchByKeywords, 'function')
})
