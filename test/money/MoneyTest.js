const Dollar = require('../../src/money/Dollar');
const Franc = require('../../src/money/Franc');
const assert = require('power-assert');

describe('[[Chapter1]Chapter2][Chapter4] fix class reaction', function(){
  it('should return N times dollar', function(){
    const five = new Dollar(5);
    let product = five.times(2);
    assert(new Dollar(10).amount === product.amount);
    product = five.times(3);
    assert(new Dollar(15).amount === product.amount);
  });
});

describe('[Chapter3][Chapter6] equals() method', function(){
  it('should return true', function(){
    assert.ok(new Dollar(5).equals(new Dollar(5)) === true);
    assert.ok(new Franc(5).equals(new Franc(5)) === true);
  });
  it('should return false', function(){
    assert.ok(new Dollar(5).equals(new Dollar(6)) === false);
    assert.ok(new Franc(5).equals(new Franc(6)) === false);
  });
});

describe('[Chapter5] 5CHF * 2 = 10CHF', function(){
  it('should return N times franc', function(){
    const five = new Franc(5);
    let product = five.times(2);
    assert(new Franc(10).amount === product.amount);
    product = five.times(3);
    assert(new Franc(15).amount === product.amount);
  });
});

describe('[Chapter7]Comparison Franc and Dollar', function(){
  it('should return false', function(){
    assert.ok(new Franc(5).equals(new Dollar(5)) === false);
  });
});
