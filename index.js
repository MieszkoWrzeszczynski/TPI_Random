import range from 'lodash/range';
import * as ss from 'simple-statistics'

import invwk from './utils/factory/invwkFactory';
import lfsr from './utils/factory/lfsrFactory';
import xorShift from './utils/factory/xorShiftFactory';
import { writeToStdOut } from './utils/outputMessage';

const randomnessSampleFactory = (randomFunction, sampleSize = 1000000) =>
  range(sampleSize).map(randomFunction)

const samples = [{
  'algorithm': 'invwk',
  'data': randomnessSampleFactory(invwk.random)
}, {
  'algorithm': 'lfsr',
  'data': randomnessSampleFactory(lfsr.random)
}, {
  'algorithm': 'xorShift',
  'data': randomnessSampleFactory(() => xorShift.random())
}];

const testSamples = samples => {
  samples.forEach(({ data, algorithm }) => {
    const results = [
      [
        `Mean: ${ss.mean(data)}`
      ],
      [
        `Standard deviation: ${ss.standardDeviation(data)}`,
      ],
      [
        `Sample Variance: ${ss.sampleVariance(data)}`,
      ],
      [
        `T student test: ${ss.tTest(data, 1 / 2).toFixed(2)}`,
      ],
      [
        `InterquartileRange: ${ss.interquartileRange(data)}`,
      ]
    ];

    writeToStdOut(algorithm, results);
  })
}

testSamples(samples);