// test the following(1-8)

const Checkout = require('../checkout.js');
const expect = require('chai').expect;
let checkout;

beforeEach(function(){
  checkout = new Checkout();
  checkout.addItemPrice('a', 1);
  checkout.addItemPrice('b', 2);
});

// 1. can create an instance of the Checkout class
it('Can instantiate checkout', function() {
  // const checkout = new Checkout(); --> we have defined the beforeEach function so we do not repeat the instantiation.
});

// 2. can add an item price
it('can add item price', function() {
  // const checkout = new Checkout();  
  // checkout.addItemPrice('a', 1); --> we have defined the beforeEach function so we do not repeat here
});

// 3. can add an item
it('can add item', function() {
  // const checkout = new Checkout();
  // checkout.addItemPrice('a', 1);
  checkout.addItem('a');
});

// 4. can calculate the current total
it('can calculate current total', function() {
  // const checkout = new Checkout();
  // checkout.addItemPrice('a', 1);
  checkout.addItem('a');
  expect(checkout.calculateTotal()).to.equal(1);
});

//  REFACTORING: To refactor, tests 1, 2 and 3 are contained within 4, so we can remove 1, 2 and 3.

// 5. can add multiple items and get correct total
it('can add multiple items and get correct total', function() {
  // const checkout = new Checkout();
  // checkout.addItemPrice('a', 1);
  checkout.addItem('a');
  // checkout.addItemPrice('b', 2);
  checkout.addItem('b');
  expect(checkout.calculateTotal()).to.equal(3);
});

// 6. can add discount rule
it('can add discount rule', function() {
  checkout.addDiscount('a', 3, 2);
});

// 7. can add discount rules to the total
it('can add discount rules to the total', function() {
  checkout.addDiscount('a', 3, 2);
  checkout.addItem('a');
  checkout.addItem('a');
  checkout.addItem('a');
  expect(checkout.calculateTotal()).to.equal(2);
});

// 8. exception is thrown for item added without price
it('cexception is thrown for item added without price', function() {
  expect(function(){checkout.addItem('c')}).to.throw();
});