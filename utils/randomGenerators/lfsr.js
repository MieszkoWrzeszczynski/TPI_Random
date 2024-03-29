// 16 bit Linear feedback shift register
export const lfsr = (function() {
  var max = Math.pow(2, 16),
    period = 0,
    seed, out;
  return {
    setSeed: function(val) {
      out = seed = val || Math.round(Math.random() * max);
    },
    getSeed: function() {
      return seed;
    },
    getPeriod: function() {
      return period;
    },
    random: function() {
      var bit;
      // From http://en.wikipedia.org/wiki/Linear_feedback_shift_register
      bit = ((out >> 0) ^ (out >> 2) ^ (out >> 3) ^ (out >> 5)) & 1;
      out = (out >> 1) | (bit << 15);
      period++;
      return out / max;
    }
  };
}());