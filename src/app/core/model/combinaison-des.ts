import {Jet} from './jet';
import {Des} from './des';
import {descendingSort} from '../../utils/sort-utils';

export const MIN_DES_BRELAN = 3;
export const MIN_DES_CARRE = 4;
export const MIN_DES_YAMS = 5;

export class CombinaisonDes {

  constructor() {
  }

  static isBrelan = (lance: Jet): boolean =>
    CombinaisonDes.getMaxNumberDisctinct(lance.getJet()) >= MIN_DES_BRELAN

  static isCarre = (lance: Jet): boolean =>
    CombinaisonDes.getMaxNumberDisctinct(lance.getJet()) >= MIN_DES_CARRE

  static isYams = (lance: Jet): boolean =>
    CombinaisonDes.getMaxNumberDisctinct(lance.getJet()) >= MIN_DES_YAMS

  private static countDistinctElement = (lance: Array<Des>): Array<number> => {
    const numberDistinctElement = Array<number>();
    lance.forEach((des: Des) => numberDistinctElement[des.getValue()] = (numberDistinctElement[des.getValue()] || 0) + 1);
    return numberDistinctElement;
  }

  private static getMaxNumberDisctinct = (lance: Array<Des>): number =>
    CombinaisonDes.countDistinctElement(lance).sort((a, b) => descendingSort(a, b))[0]
}
