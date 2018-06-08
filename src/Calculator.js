module.exports = class Calculator {
  constructor(name){
    this.name = name;
  }
  plus(x, y){
    return x + y;
  }

  minus(x, y){
    return x - y;
  }

  divide(x, y){
    return x / y;
  }
};
