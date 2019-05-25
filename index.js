import _ from 'lodash';
import * as ss from 'simple-statistics'

import invwk from './utils/factory/invwkFactory';
import lfsr from './utils/factory/lfsrFactory';
import xorShift from './utils/factory/xorShiftFactory';
import { outputMessage } from './utils/outputMessage';

const sampleFactory = (randomFunction, sampleSize = 1000000) =>
  _.range(sampleSize).map(randomFunction)

const samples = [{
    'algorithm': 'invwk',
    'data': sampleFactory(invwk.random)
  }, {
    'algorithm': 'lfsr',
    'data': sampleFactory(lfsr.random)
  }, {
    'algorithm': 'xorShift',
    'data': sampleFactory(() => xorShift.random())
  }
];

const testSamples = samples => {
  samples.forEach((sample) => {
    const results = [
      'Mean:', 
      ss.mean(sample.data),
      'Standard deviation:', 
      ss.standardDeviation(sample.data),
      'Sample Variance:', 
      ss.sampleVariance(sample.data),
      'T student test:',
      ss.tTest(sample.data, 1/2).toFixed(2)  
    ];

    outputMessage(sample, results);   
  })
}

testSamples(samples);