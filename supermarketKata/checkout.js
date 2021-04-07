module.exports = class Checkout {

  constructor() {
    this.prices = new Object();
    this.items = new Object();
    this.discount = new Object();

  }
  addItemPrice(item, price){
    this.prices[item] = price;
  }

  additem(item) {
    if(this.items[item] === undefined){
      throw('No price defined for item' + item);
    } 
    if (this.items[item] === undefined){
      this.items[item] = 1;
    } else {
      this.items[item] ++;
    }
  }

  calculateTotal() {
    let total = 0;
    for (let item in this.items){
      total += calculateItemTotal(item);
    }
  }

  //  calculate total for a particular item
  calculateItemTotal(item) {
    let discount = this.discounts[item];
    if(discount !== undefined){
      total =+ this.calculateDiscount(item, this.items[item], discount);
    } else {
      total += (this.prices[item] * this.items[item]);
    }
    return total;
  }

  calculateDiscount(item, itemCnt, discount){
    let total = 0;
    let nrOfDiscounts = itemCnt / discount.cnt;
    total += nrOfDiscounts * discount.price;
    let remainder = itemCnt % discount.cnt;
    total += remainder * this.prices[item];
    return total;
  }

  addDiscount(item, itemCnt, discountPrice) {
    this.discount[item] = {cnt: itemCnt, price: discountPrice};
  }

}