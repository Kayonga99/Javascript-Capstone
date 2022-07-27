/**
 * @jest-environment jsdom
 */

import CountComments from '../modules/countComements';
import itemsCount from '../modules/itemsCount';

describe('CountComments', () => {
  test('5', () => {
    document.body.innerHTML = '<span class="count-comment"></span>';
    expect(CountComments([{}, {}, {}, {}, {}])).toBe(5);
  });

  test('0', () => {
    document.body.innerHTML = '<span class="count-comment"></span>';
    expect(CountComments([])).toBe(0);
  });
  test('2', () => {
    document.body.innerHTML = '<span class="count-comment"></span>';
    expect(CountComments(['1', '2'])).toBe(2);
  });
});

describe('itemsCount', () => {
  test('6', () => {
    document.body.innerHTML = '<span id="food-count"></span>';
    expect(itemsCount([{}, {}, {}, {}, {}, {}])).toBe(6);
  });
  test('0', () => {
    document.body.innerHTML = '<span id="food-count"></span>';
    expect(itemsCount([])).toBe(0);
  });
  test('2', () => {
    document.body.innerHTML = '<span id="food-count"></span>';
    expect(itemsCount(['1', '2'])).toBe(2);
  });
});
