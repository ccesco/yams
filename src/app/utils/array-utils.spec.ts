import {arraysEqual} from './array-utils';

describe('ArrayUtils', () => {
  describe('test de Equals', () => {
    it('même tableau', () => {
      const array = [1, 2, 3, 4];
      expect(arraysEqual(array, array)).toBeTruthy();
    });
    it('array1 est null', () => {
      const array = [1, 2, 3, 4];
      expect(arraysEqual(null, array)).toBeFalsy();
    });
    it('array2 est null', () => {
      const array = [1, 2, 3, 4];
      expect(arraysEqual(array, null)).toBeFalsy();
    });
    it('array1 et array2 sont null', () => {
      expect(arraysEqual(null, null)).toBeFalsy();
    });
    it('array1 et array2 sont null', () => {
      const array1 = [1, 2, 3, 4];
      const array2 = [1, 2, 3, 4];
      expect(arraysEqual(array1, array2)).toBeTruthy();
    });
  });
});
