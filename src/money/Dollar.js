module.exports = class Dollar {
  constructor(amount){
    this.amount = amount;
  }
  times(multiplier){
    return new Dollar(this.amount * multiplier);
  }
  equals(object){
    let dollar = object;
    return this.amount === dollar.amount;
  }
};
