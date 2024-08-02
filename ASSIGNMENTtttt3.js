// Write a JavaScript function that takes an array of strings and returns a new array with each string capitalized.
const arr = ["pooja", "sadhvi", "shivangi"];//declaring an array

function capital(arr){  //writing a function with name capital
    return  arr.map(str=>str.charAt(0).toUpperCase()+str.slice(1)) //returning the value after using arr.method and converting the letter at index 0 to uppercase and slicing method 
    
}
console.log(capital(arr))//calling the function 


//Create a function that returns the second largest element in an array.
const num=[10,20,30,40,]; //declaring array
function findSLargest(arr) {//writing the function 
  if(arr.length<2){   //comparing if the length of array is less than 2
    return 'invalid input'; //if the condition is true it will display the foll output
  }
  arr.sort((a,b)=>a-b); //here it will sort the array in asc order
  return 'the second largest element is '+arr[arr.length-2];//it will return the secoond last number of the array
}
console.log(findSLargest(num))//calling the function 

//Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.

const d=[          //decclaring an array of objects
    {
    name:'apple',
    price:100,
    },
    {
        name:'banana',
        price:80,
    },
    {
        name:'cherry',
        price:120,
    },
]
function arrobj(d,name){ //writing a function
    return(d.map(obj=> obj[name]));//creates a new array with help of map method 
}
const e=arrobj(d,'name');//stores the returned array in variable e 
console.log(e)  //printing the array

//Calculate the factorial of every element in an array and store it in a new array.
function calculate(arr) {//writing a function
    let result = [];  //declaring an empty array

    for (let i = 0; i < arr.length; i++) { //using for loop to iterate array
        let factorial = 1; //declaring factorial as 1
        for (let j = 1; j <= arr[i]; j++) {  //uusing for loop to iterate array
            factorial *= j;
        }
        result.push(factorial);//appending the elements to end of an array
    }

    return result;  //returning the reult
}

const arr1 = [1,2,3,4];//declaring an array
const b = calculate(arr1);//stores the returned array in variable
console.log(b);//printing the result


//Create a function to find the intersection of two arrays.
const findIntersection = (array1, array2) => {//writing a function
    const set1 = new Set(array1);//declaing a new array
    return array2.filter(element => set1.has(element));//returning the array using filter method
}
const resultSet = findIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]);//declaring array
console.log(resultSet);//printing the result