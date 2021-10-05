print('slide 5');
print(typeof 4.5);
print(typeof 'x');

//slide 6
print('slide 6');
print(Math.max(3, 5));

//slide 7
print('slide 7');
print(3 > 2);
print(3 < 2);
print('Aardvark' < 'Zoroaster');

//slide 8
print('slide 8');
print(true && false);
print(true && true);
print(false || true);
print(false || false);

//slide 12
print('slide 12');
var x = 3;
var y = 1.1;
print(x + y);
print(x * y);
print((x + y) * (x - y));
var z = 9;
print(Math.sqrt(z));
print(Math.abs(y / x));

//slide 14
print('slide 14');
var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;
if (current < mid) {
  mid = (current - low) / 2;
} else if (current > mid) {
  mid = (current + high) / 2;
} else {
  found = current;
}

//slide 15
print('slide 15');
var number = 1;
var sum = 0;
while (number < 11) {
  sum += number;
  ++number;
}
print(sum);
// displays 55

//slide 16
print('slide 16');
var number = 1;
var sum = 0;
for (var number = 1; number < 11; number++) {
  sum += number;
}
print(sum); // displays 55

//slide 18
print('slide 18');
function factorial(number) {
  var product = 1;
  for (var i = number; i >= 1; --i) {
    product *= i;
  }
  return product;
}
print(factorial(4)); // displays 24
print(factorial(5)); // displays 120
print(factorial(10)); // displays 3628800

//slide 19
function curve(arr, amount) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount;
  }
}
var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
print(grades); // displays 82,78,79,86,95

//slide 21
function showScope() {
  return scope;
}
var scope = 'global';
print(scope); // displays "global"
print(showScope()); // displays "global"

//slide 22
function showScope() {
  var scope = 'local';
  return scope;
}
var scope = 'global';
print(scope); // displays "global"
print(showScope()); // displays "local"

//slide 24
let day1 = {
  squirrel: false,
  events: ['work', 'touched tree', 'pizza', 'running'],
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

//slide 25
function Checking(amount) {
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}
function deposit(amount) {
  this.balance += amount;
}
function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    print('Insufficient funds');
  }
}
function toString() {
  return 'Balance: ' + this.balance;
}
// test
var account = new Checking(500);
account.deposit(1000);
print(account.toString()); // Balance: 1500
account.withdraw(750);
print(account.toString()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
print(account.toString()); // Balance: 750

//slide 27
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

function print(value) {
  console.log(value);
}
