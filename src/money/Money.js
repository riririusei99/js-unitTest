module.exports = class Money{
  constructor(amount){
    this.amount = amount;
  }
  equals(object){
    let money = object;
    return this.amount === money.amount;
  }
}
