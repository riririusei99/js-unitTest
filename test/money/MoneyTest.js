const Dollar = require('../../src/money/Dollar');
const dollar = new Dollar();
const assert = require('power-assert');


describe('[Chapter1] $5 * 2 = $10', function(){
  it('should return 2time dollar', function(){
    const five = new Dollar(5);
    let product = five.times(2);
    assert(product.amount === 10);
  });
});

describe('[Chapter2] fix class reaction', function(){
  it('should return 15', function(){
    const five = new Dollar(5);
    let product = five.times(2);
    assert(product.amount === 10);
    product = five.times(3);
    assert(product.amount === 15);
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
