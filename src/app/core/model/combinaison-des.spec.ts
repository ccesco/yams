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
});
