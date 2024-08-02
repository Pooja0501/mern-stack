//QUESTION 1:Generate a multiplication table for numbers from 1 to 10
for (let i = 1; i <= 10; i++) {   //using for loop for the table
    let row = '';                //declaring and assigning 
    for (let j = 1; j <= 10; j++) {   //using a nested for loop for multiplication table
      row += j * i + '\t';          //multiplying the outer loop numbers and inner loop number
    }
    console.log(row);               //printing the result
  }

//question 2:sum of array
let sum= 0;                        //assigning the variable sum as zero
let x = [10, 20, 30, 40, 50];      //declaring an array x with values
for (let i=0; i<x.length; i++) {   //using for loop to enter the numbers 
    sum+= x[i];                   //adding the values
}
console.log("the sum is:" +sum);   //printing the result of the sum



//question 3:palindrome checker
function Palindrome(str) {  //writing a function and passing an arguement string
    // converting  the string to lowercase
    str = str.toLowerCase();
    
    // Compare the string to its reverse
    return str === str.split('').reverse().join('');
}

// Example usage
console.log(Palindrome('LEVEL')); //  this will return true
console.log(Palindrome('Level')); //  this will true
console.log(Palindrome('Hello')); //  this will false




//question 4:fibonacciseries
function generateFibonacciSeries(N) { //writing a function and passing it a variable n
    let fn1 = 0, fn2 = 1, nextFibonacci; //declaring the first two variabl of series
    console.log('Fibonacci Series up to', N, 'terms:'); //printing statement
    for (let i = 1; i <= N; i++) {  //using for loop  to enter the numbers given by the user 
      console.log(fn1);  //printing zero
      nextFibonacci = fn1 + fn2;  //applying the logic
      fn1 = fn2;   //applying the logic
      fn2 = nextFibonacci;
    }
  }
  // Example usage
  if (process.argv.length < 3) {
    console.log('Please provide the number of Fibonacci terms as a command-line argument.');
    return;
  }
  const numTerms = parseInt(process.argv[2]);
  generateFibonacciSeries(numTerms);

  //question 5: scope
  if (true) {
    var a = 'hello';
    let b = 'hi'; //refernce error
    const c = 'welcome'; //refernce error
  }
  
  console.log(a); 
  console.log(b); 
  console.log(c)