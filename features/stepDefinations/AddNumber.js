const { Given, When, Then } = require('@cucumber/cucumber');
const prompt = require('prompt-sync')();

let num1, num2, sum;

// Pengujian Penjumlahan
Given('Enter numbers for Adding', function () {
    num1 = parseFloat(prompt('input first number (+) : '));
    num2 = parseFloat(prompt('input second number (+) : '));
    console.log('Numbers are ' + num1 + ' and ' + num2);
});

When('Calculate Adding', function () {
    sum = num1 + num2;
    console.log(num1 + ' + ' + num2 + ' =');
});

Then('Result of Adding', function () {
    console.log('Sum of numbers is ' + sum);
    console.log('=====================================');
});


// Pengujian Pengurangan
Given('Enter numbers for Subtraction', function () {
    num1 = parseFloat(prompt('input first number (-) : '));
    num2 = parseFloat(prompt('input second number (-) : '));
    console.log('Numbers are ' + num1 + ' and ' + num2);
});

When('Calculate Subtraction', function () {
    sum = num1 - num2;
    console.log(num1 + ' - ' + num2 + ' =');
});

Then('Result of Subtraction', function () {
    console.log('Result of subtraction is ' + sum);
    console.log('=====================================');
});

// Pengujian Perkalian
Given('Enter numbers for Multiplication', function () {
    num1 = parseFloat(prompt('input first number (*) : '));
    num2 = parseFloat(prompt('input second number (*) : '));
    console.log('Numbers are ' + num1 + ' and ' + num2);
});

When('Calculate multiplication', function () {
    sum = num1 * num2;
    console.log(num1 + ' * ' + num2 + ' =');
});

Then('Result of Multiplication', function () {
    console.log('Result of multiplication is ' + sum);
    console.log('=====================================');
});

// Pengujian Pembagian
Given('Enter numbers for Distribution', function () {
    num1 = parseFloat(prompt('input first number (/) : '));
    num2 = parseFloat(prompt('input second number (/) : '));
    console.log('Numbers are ' + num1 + ' and ' + num2);
});

When('Calculate Distribution', function () {
    sum = num1 / num2;
    console.log(num1 + ' / ' + num2 + ' =');
});

Then('Result of Distribution', function () {
    console.log('Result of division is ' + sum);
});
