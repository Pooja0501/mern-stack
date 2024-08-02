// Question 1: Data Types and VariablesQuestion 
let A="pooja"; //declaring a variable and assigning it value
console.log("value of A:",A, "Type:",typeof A); //displaying the output and its type

let B=166; //declaring a variable and assigning it value
console.log("value of B:",A, "Type:",typeof B);//displaying the output and its type

let C=false;//declaring a variable and assigning it value
console.log("value of C:",C, "Type:",typeof C);//displaying the output and its type

let obj={name:"Twisted love",price:150}; //declaring a variable and assigning it value
console.log("Value of obj:", obj, "Type:", typeof obj)//displaying the output and its type 

let array=[1,2,3,4,5];//declaring a variable and assigning it value
console.log("Value of array:", array, "Type:", typeof array);//displaying the output and its type


// Question 2: Operators and Expressions
let num1= prompt("enter first number"); //getting the first number from user
let num2= prompt("enter second number");// getting second number from user
let add=num1 + num2;//performing the addition of two numbers
console.log(add);// returning and displaying the result of addition

let sub=num1-num2;//performing the subtraction of two numbers
console.log(sub);// returning and displaying the result of subtraction

let mul=num1*num2;//performing the multiplication of two numbers
console.log(mul);// returning  and displaying the result of multiplication

let div=num1/num2;//performing the division of two numbers
console.log(div);// returning and displaying the result of division



// Question3: seeing whether the entered number is positive,negative or zero
let num=prompt("enter the number");//taking the input from the user
if(num>0){                         //checking if the entered number is greater than zero
    console.log("entered number is positive");//if the above condition is true then it'll print the output that it is positive 
}
else if(num==0){                       // checking if the entered number is equal to zero
    console.log("entered number is zero");//if the above condition is true then it'll print the output that it is zero
}
else{                                //if none of the above condition is true than it'll check this condition 
    console.log("entered number is zero");//and it'll display te result that number is negative
}


//question 4: write a program that prints all the even numbers from 1 to 20
let d=20;                 //declaring variable d with value 20
for(i=1;i<=d;i++){        //using for loop to iterate numbers till 20
  if(i%2!==0){             //checking if the condition is true 
    continue;             //if the condition is true it'll skip the iteration
  } console.log(i);       //if the condition is false then it'll print the number
}



//question 5 displaying the grades

let grade=parseFloat(prompt("enter your percentage"));//taking input from the user and converting into floating using the function parseFloat
switch(true){   //writing true here so that it can enter the swtich case condition
    case(grade=90 && grade<=100): //checking the condition 
    console.log("A");             //if the condition is true then it'll diplay the foll output
    break;                        //if the condition is true then after displaying the output it'll break and get out of the loop

    case(grade=80 && grade<=89):  //checking the condition
    console.log("B");             //if the condition is true then it'll diplay the foll output
    break;                         //if the condition is true then after displaying the output it'll break and get out of the loop

    case(grade=70 && grade<=79):  //checking the condition
    console.log("C");             //if the condition is true then it'll diplay the foll output
    break;                         //if the condition is true then after displaying the output it'll break and get out of the loop

    case(grade=60 && grade<=69):  //checking the condition
    console.log("D");             //if the condition is true then it'll diplay the foll output
    break;                         //if the condition is true then after displaying the output it'll break and get out of the loop

    case(grade=0 && grade<=59):  //checking the condition
    console.log("FAIL!!!!")      //if the condition is true then it'll diplay the foll output
    break;                        //if the condition is true then after displaying the output it'll break and get out of the loop

    default:                   //if none of the above cases are true then it'll by default enter this case
        console.log("pls enter valid input")//if the condition is true then it'll diplay the foll output
}
