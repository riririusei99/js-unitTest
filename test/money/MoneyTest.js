const Dollar = require('../../src/money/Dollar');
const dollar = new Dollar();
const assert = require('power-assert');


describe('$5 * 2 = $10', function(){
  it('shuld return 2time dollar', function(){
    five = new Dollar(5);
    five.times(2);
    assert(five.amount === 10);
  });
});
