module.exports = class Money{
  constructor(amount){
    this.amount = amount;
    this.name;
  }
  equals(object){
    let money = object;
    return this.amount === money.amount && this.name === object.name;
  }
}
