import {Des} from './des';

export class Jet {
  constructor(private lance: Array<Des>) {
  }

  getJet = () => this.lance;
}
