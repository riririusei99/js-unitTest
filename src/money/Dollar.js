const Money = require('./Money');

module.exports = class Dollar extends Money{
  constructor(amount){
    super(amount);
  }
  times(multiplier){
    return new Dollar(this.amount * multiplier);
  }
};
