const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
var modifiedfoods = foods.slice(1, 3);
console.log(modifiedfoods);
modifiedfoods = foods.splice(2, 0, "noodles", "icecream");
console.log(modifiedfoods);

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven(num) {
    return num % 2 == 0;
}
var evenArray = numberArray.filter(isEven);
console.log(evenArray);

function isPrime(num) {
    if (num == 2 || num == 3 || num == 5)
    return true;
    var i = 2;
    while (i * i <= num) {
        if (num % i == 0)
        return true;
    }
    return false;
}
var primeArray = numberArray.filter(isPrime);
console.log(primeArray);

function nonPrime(numberArray) {
    var res = [];
    numberArray.forEach(num => {
        if (! isPrime(num)) 
        res.push(num);
    });
    return res;
}
console.log(nonPrime(numberArray));

isEven = (n) => n % 2 == 0;

function findSquareOfNumbers(num) {
    return num * num;
}
var myArray = [11, 34, 20, 5, 53, 16];
console.log(myArray.map(findSquareOfNumbers));

var myArray = [2, 3, 5, 10];
var mulArray = myArray.reduce(function(initial, num) {
    return initial * num;
});
console.log(mulArray);