import {binding, given, then, when} from 'cucumber-tsflow';
import {assert} from 'chai';
import {Jet} from '../../../src/app/core/model/jet';
import {Des} from '../../../src/app/core/model/des';
import {CombinaisonDes} from '../../../src/app/core/model/combinaison-des';

@binding()
export class CombinaisonDesSteps {

  private listeDes: Array<Des> = new Array<Des>();

  @given(/Je suis un joueur/)
  public isPlayer() {
  }

  @when(/le premier dés est (\d*)/)
  public premierDes(valeurDes: number) {
    this.listeDes.push(new Des(valeurDes));
  }

  @when(/le deuxième dés est (\d*)/)
  public deuxiemeDes(valeurDes: number) {
    this.listeDes.push(new Des(valeurDes));
  }

  @when(/le troisième dés est (\d*)/)
  public troisiemeDes(valeurDes: number) {
    this.listeDes.push(new Des(valeurDes));
  }

  @when(/le quatrieme dés est (\d*)/)
  public quatriemeDes(valeurDes: number) {
    this.listeDes.push(new Des(valeurDes));
  }

  @when(/le cinquieme dés est (\d*)/)
  public cinquiemeDes(valeurDes: number) {
    this.listeDes.push(new Des(valeurDes));
  }

  @then(/c'est un brelan (.*)/)
  public isBrelan(ouiNon: string) {
    const isBrelan = ouiNon.toLowerCase() === 'oui';
    const jet: Jet = new Jet(this.listeDes);
    assert.equal(CombinaisonDes.isBrelan(jet), isBrelan);
  }

  @then(/c'est un carre (.*)/)
  public isCarre(ouiNon: string) {
    const isCarre = ouiNon.toLowerCase() === 'oui';
    const jet: Jet = new Jet(this.listeDes);
    assert.equal(CombinaisonDes.isCarre(jet), isCarre);
  }

  @then(/c'est un yams (.*)/)
  public isYams(ouiNon: string) {
    const isYams = ouiNon.toLowerCase() === 'oui';
    const jet: Jet = new Jet(this.listeDes);
    assert.equal(CombinaisonDes.isYams(jet), isYams);
  }
}
