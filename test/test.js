const Calculator = require('../src/Calculator');
const calculator = new Calculator('riririusei99');
const assert = require('power-assert');


describe('Test plus', function(){
  it('shoud return 3 when value is number', function(){
    assert(calculator.plus(1,2) === 3);
  });
  it('【ERROR SAMPLE】shoud return "12"', function(){
    assert(calculator.plus("1","2") === 12);
  });
});

describe('Test minus', function(){
  it('shoud return 3 when value is number', function(){
    assert(calculator.minus(5,2) === 3);
  });
  it('shoud return -2 when value is number', function(){
    assert(calculator.minus(3,5) === -2);
  });

});

describe('Test devide', function(){
  it('shuoud return 1 when value is number', function(){
    assert(calculator.divide(5,5) === 1);
  });
  it('shuoud return error when 0 divide', function(){
    assert(calculator.divide(5,0) === Infinity);
  });
});
