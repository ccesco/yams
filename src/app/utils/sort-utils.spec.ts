import {ascendingSort, descendingSort} from './sort-utils';

describe('SortUtils', () => {
  describe('Test du tri croissant', () => {
    it('tri ascendant positif', () => {
      expect(ascendingSort(1, 2)).toBe(-1);
    });
  });
  describe('Test du tri decroissant', () => {
    it('tri descendant positif', () => {
      expect(descendingSort(1, 2)).toBe(1);
    });
  });
});
