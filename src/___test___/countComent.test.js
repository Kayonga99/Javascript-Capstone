/**
 * @jest-environment jsdom
 */

 import CountComments from './CountComments';

 document.body.innerHTML = '<span class="count-comment"></span>';
 
 test('5', () => {
   expect(CountComments([{}, {}, {}, {}, {}])).toBe(5);
 });
 
 test('0', () => {
   expect(CountComments([])).toBe(0);
 });
 test('2', () => {
   expect(CountComments(['1', '2'])).toBe(2);
 });