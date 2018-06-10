const Dollar = require('../../src/money/Dollar');
const dollar = new Dollar();
const assert = require('power-assert');

describe('[[Chapter1]Chapter2][Chapter4] fix class reaction', function(){
  it('should return 15', function(){
    const five = new Dollar(5);
    let product = five.times(2);
    assert(new Dollar(10).amount === product.amount);
    product = five.times(3);
    assert(new Dollar(15).amount === product.amount);
  });
});

describe('[Chapter3] equals() method', function(){
  it('should return true', function(){
    assert.ok(new Dollar(5).equals(new Dollar(5)) === true);
  });
  it('should return false', function(){
    assert.ok(new Dollar(5).equals(new Dollar(6)) === false);
  });
});
