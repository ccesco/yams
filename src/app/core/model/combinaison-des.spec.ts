import { CombinaisonDes } from './combinaison-des';
import {Jet} from './jet';
import {Des} from './des';

describe('CombinaisonDes', () => {
  it('est bien crée', () => {
    expect(new CombinaisonDes()).toBeTruthy();
  });

  describe('Test de la combinaison Brelan', () => {
    describe('est un brelan', () => {
      it('avec trois chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(2), new Des(3)]);
        expect(CombinaisonDes.isBrelan(lance)).toBeTruthy();
      });
      it('avec quatres chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(1), new Des(2)]);
        expect(CombinaisonDes.isBrelan(lance)).toBeTruthy();
      });
      it('avec cinqs chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(1), new Des(1)]);
        expect(CombinaisonDes.isBrelan(lance)).toBeTruthy();
      });
    });
    describe('pas un brelan', () => {
      it('avec un chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(2), new Des(3), new Des(4), new Des(5)]);
        expect(CombinaisonDes.isBrelan(lance)).toBeFalsy();
      });
      it('avec deux chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(2), new Des(2), new Des(3), new Des(4), new Des(5)]);
        expect(CombinaisonDes.isBrelan(lance)).toBeFalsy();
      });
    });
  });

  describe('Test de la combinaison Carre', () => {
    describe('est un carre', () => {
      it('avec quatres chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(1), new Des(2)]);
        expect(CombinaisonDes.isCarre(lance)).toBeTruthy();
      });
      it('avec cinqs chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(1), new Des(1)]);
        expect(CombinaisonDes.isCarre(lance)).toBeTruthy();
      });
    });
    describe('pas un carre', () => {
      it('avec un chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(2), new Des(3), new Des(4), new Des(5)]);
        expect(CombinaisonDes.isCarre(lance)).toBeFalsy();
      });
      it('avec deux chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(2), new Des(2), new Des(3), new Des(4), new Des(5)]);
        expect(CombinaisonDes.isCarre(lance)).toBeFalsy();
      });
      it('avec trois chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(2), new Des(3)]);
        expect(CombinaisonDes.isCarre(lance)).toBeFalsy();
      });
    });
  });

  describe('Test de la combinaison Yams', () => {
    describe('est un yams', () => {
      it('avec cinqs chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(1), new Des(1)]);
        expect(CombinaisonDes.isYams(lance)).toBeTruthy();
      });
    });
    describe('pas un yams', () => {
      it('avec un chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(2), new Des(3), new Des(4), new Des(5)]);
        expect(CombinaisonDes.isYams(lance)).toBeFalsy();
      });
      it('avec deux chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(2), new Des(2), new Des(3), new Des(4), new Des(5)]);
        expect(CombinaisonDes.isYams(lance)).toBeFalsy();
      });
      it('avec trois chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(2), new Des(3)]);
        expect(CombinaisonDes.isYams(lance)).toBeFalsy();
      });
      it('avec quatres chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(1), new Des(2)]);
        expect(CombinaisonDes.isYams(lance)).toBeFalsy();
      });
    });
  });

  describe('Test de la combinaison Full', () => {
    describe('est un full', () => {
      it('avec 3 chiffres 1 et 2  chiffres 2', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(2), new Des(2)]);
        expect(CombinaisonDes.isFull(lance)).toBeTruthy();
      });
      it('avec 3 chiffres 2 et 2  chiffres 1', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(2), new Des(2), new Des(2)]);
        expect(CombinaisonDes.isFull(lance)).toBeTruthy();
      });
      it('avec 3 chiffres 4 et 2  chiffres 6', () => {
        const lance: Jet = new Jet([new Des(4), new Des(6), new Des(4), new Des(6), new Des(4)]);
        expect(CombinaisonDes.isFull(lance)).toBeTruthy();
      });
    });
    describe('pas un full', () => {
      it('avec un chiffres different', () => {
        const lance: Jet = new Jet([new Des(1), new Des(2), new Des(3), new Des(4), new Des(5)]);
        expect(CombinaisonDes.isFull(lance)).toBeFalsy();
      });
      it('avec deux fois deux chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(2), new Des(2), new Des(3), new Des(4), new Des(4)]);
        expect(CombinaisonDes.isFull(lance)).toBeFalsy();
      });
      it('avec trois chiffres pareil et deux autres different', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(2), new Des(3)]);
        expect(CombinaisonDes.isFull(lance)).toBeFalsy();
      });
      it('avec quatres chiffres pareil et un different', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(1), new Des(2)]);
        expect(CombinaisonDes.isFull(lance)).toBeFalsy();
      });
      it('avec cinqs chiffres pareil', () => {
        const lance: Jet = new Jet([new Des(1), new Des(1), new Des(1), new Des(1), new Des(1)]);
        expect(CombinaisonDes.isFull(lance)).toBeFalsy();
      });
    });
  });

  describe('Test de la combinaison Grande Suite', () => {
    describe('est une grande suite', () => {
      it('ordre croissant', () => {
        const lance: Jet = new Jet([new Des(2), new Des(3), new Des(4), new Des(5), new Des(6)]);
        expect(CombinaisonDes.isGrandeSuite(lance)).toBeTruthy();
      });
      it('ordre decroissant', () => {
        const lance: Jet = new Jet([new Des(6), new Des(5), new Des(4), new Des(3), new Des(2)]);
        expect(CombinaisonDes.isGrandeSuite(lance)).toBeTruthy();
      });
      it('desordre', () => {
        const lance: Jet = new Jet([new Des(2), new Des(3), new Des(6), new Des(5), new Des(4)]);
        expect(CombinaisonDes.isGrandeSuite(lance)).toBeTruthy();
      });
    });
    describe('pas une grande suite', () => {
      it('avec un 1', () => {
        const lance: Jet = new Jet([new Des(1), new Des(2), new Des(3), new Des(4), new Des(5)]);
        expect(CombinaisonDes.isGrandeSuite(lance)).toBeFalsy();
      });
      it('avec deux chiffres pareil (2)', () => {
        const lance: Jet = new Jet([new Des(2), new Des(2), new Des(3), new Des(4), new Des(5)]);
        expect(CombinaisonDes.isGrandeSuite(lance)).toBeFalsy();
      });
      it('avec deux chiffres pareil (4)', () => {
        const lance: Jet = new Jet([new Des(2), new Des(3), new Des(4), new Des(4), new Des(5)]);
        expect(CombinaisonDes.isGrandeSuite(lance)).toBeFalsy();
      });
    });
  });
});
