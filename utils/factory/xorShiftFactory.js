import xorShift from '../randomGenerators/xorshift';
import { getRandomSeed } from '../randomSeed';

export default new xorShift([
  getRandomSeed(),
  getRandomSeed(),
  getRandomSeed(),
  getRandomSeed()
]);