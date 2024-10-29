 const {Given, When, Then}= require('@cucumber/cucumber')


Given('Enter numbers for Adding', function () {
    num1 = 5;
    num2 = 10;
    return console.log('Numbers are'+' '+num1+' '+'and'+' '+num2);
  });



When('Calculate Adding', function () {
    sum = num1+num2;
    return console.log(' ' +num1 + '+' +num2 + '=');
  });



Then('Result of Adding', function () {
    return console.log('Sum of numbers are'+' '+sum);
  });



         Given('Enter numbers for Subtraction', function () {
           num1 = 8;
           num2 = 3;
           return console.log('Numbers are'+' '+num1+' '+'and'+' '+num2);
         });


         When('Calculate Subtraction', function () {
           sum = num1-num2;
           return console.log(' ' +num1 + '-' +num2 + '=');
         });

  
         Then('Result of Subtraction', function () {
           
           return console.log('Sum of number are'+' '+sum);
         });


            Given('Enter numbers for Multiplication', function () {
                num1 = 4;
                num2 = 6;
                return console.log('Numbers are'+' '+num1+' '+'and'+' '+num2);
                });
 
 
             When('Calculate multiplication', function () {
                sum = num1*num2;
                return console.log(' ' +num1 + '*' +num2 + '=');
                });
 
   
            Then('Result of Multiplication', function () {
                
                return console.log('Result of multiplication is'+' '+sum);
                });


                    Given('Enter numbers for Distribution', function () {
                        num1 = 9;
                        num2 = 3;
                        return console.log('Numbers are'+' '+num1+' '+'and'+' '+num2);
                    });
     
     
                    When('Calculate Distribution', function () {
                        sum = num1 / num2;
                        return console.log(' ' +num1 +'/' + num2 + '=');
                    });
     
       
                    Then('Result of Distribution', function () {
                    
                        return console.log('Result of distribution is'+' '+sum);
                    });