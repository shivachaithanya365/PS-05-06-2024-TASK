/*Write a program to print the dual numbers, which forms input2 by adding them. print such pairs separated by spaces.
input1: [2,4,6,5,1]
input2: 6
output: 2 4
        5 1  */

var num1 = prompt("Enter numbers seperating with spaces : ").split(" ").map(Number);
// var num=[2,4,6,5,1];
var num2 = +prompt("Enter a number : ");
// var num2 = 6;
for (let i = 0; i < num1.length; i++) {
    for (let j = i + 1; j < num1.length; j++) {
        if (num1[i] + num1[j] === num2) {
            console.log(`${num1[i]} ${num1[j]}`);
            document.write(`<h3>${num1[i]} ${num1[j]}</h3>`);
        }
    }
}
console.log(`The sum of these numbers gives us the input 2 (${num2}) : `);
document.write(`<h3>The sum of these numbers gives us the input 2 (${num2}) : </h3><hr>`);


//Method -2
var num = prompt("Enter numbers seperating with spaces : ").split(" ").map(Number);
var num2 = +prompt("Enter a number : ");

for (let i in num1) {
    for (let j in num1) {
        if (i < j && num1[i] + num1[j] === num2) {
            console.log(`${num1[i]} ${num1[j]}`);
            document.write(`<h3>${num1[i]} ${num1[j]}</h3>`);
        }
    }
}
console.log(`The sum of these numbers gives us the input 2 (${num2}) : `);
document.write(`<h3>The sum of these numbers gives us the input 2 (${num2}) : </h3><hr>`);

/*Write a program to print no of pairs formed by the array of numbers
input : [10, 10, 20, 30, 20, 20]    output: 2 pairs*/

var arr = prompt("Enter numbers seperating with spaces : ").split(" ").map(Number);
// var arr= [10, 10, 20, 30, 20, 20];
var empty = [];
var pairs = 0;
for (let i of arr) {
    if (!empty.includes(i)) {
        empty.push(i);
    }
}
for (let i of empty) {
    var count = 0;
    for (let j of arr) {
        if (i == j) {
            count++
        }
    }
    pairs += Math.floor(count / 2);
}
console.log(`No. of pairs in the input (${arr}) is : ${pairs}`);
document.write(`<h3>No. of pairs in the input (${arr}) is : ${pairs}</h3><hr>`);