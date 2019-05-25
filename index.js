import _ from 'lodash';

import invwk from './utils/factory/invwkFactory';
import lfsr from './utils/factory/lfsrFactory';
import xorShift from './utils/factory/xorShiftFactory';


console.log(_.range(30).map(x => invwk.random()))
console.log(_.range(30).map(x => lfsr.random()))
console.log(_.range(30).map(x => xorShift.random()))