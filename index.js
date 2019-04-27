const _ = require('lodash');

const invwk = (function() {
    const max = Math.pow(2, 32);
    let seed = null;

    return {
        setSeed: function(val) {
            seed = val || Math.round(Math.random() * max);
        },
        getSeed: function() {
            return seed;
        },
        rand: function() {
            // creates randomness...somehow...
            seed += (seed * seed) | 5;
            // Shift off bits, discarding the sign. Discarding the sign is
            // important because OR w/ 5 can give us + or - numbers.
            return (seed >>> 32) / max;
        }
    };
}())

invwk.setSeed()
console.log(_.range(30).map(x => invwk.rand()))