import {Jet} from './jet';
import {Des} from './des';
import {descendingSort} from '../../utils/sort-utils';

export const MIN_DES_BRELAN = 3;

export class CombinaisonDes {

  constructor() {
  }

  static isBrelan = (lance: Jet): boolean =>
    CombinaisonDes.countDistinctElement(lance.getJet()).sort((a, b) => descendingSort(a, b))[0] >= MIN_DES_BRELAN

  private static countDistinctElement = (lance: Array<Des>): Array<number> => {
    const numberDistinctElement = Array<number>();
    lance.forEach((des: Des) => numberDistinctElement[des.getValue()] = (numberDistinctElement[des.getValue()] || 0) + 1);
    return numberDistinctElement;
  }
}
