const Money = require('./Money');

module.exports = class Franc extends Money{
  constructor(amount){
    super(amount);
    this.name = 'Franc';
  }
  times(multiplier){
    return new Franc(this.amount * multiplier);
  }
};
