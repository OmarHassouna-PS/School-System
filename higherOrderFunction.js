// Array Q1
function found (array, number) {

    for (let index = 0; index < array.length; index++) {
        if (array[index] === number) {
            return index;
        }
    }
    return -1;
}

// Array Q2
function missingNumber (array) {

    array.sort();

    for (let index = 0; index <= array.length; index++) {
        if (array[index] !== index+1) {
            return index+1;
        }
    }
    return -1;
}

// Array Q3
function duplicatesNumber (array1) {

    array2 = [];

    array1.sort();

    for (let index = 0; index < array1.length; index++) {

        if (!array2.includes(array1[index])) {
            array2.push(array1[index]);
        }
    }
    return array2;
}

// Array Q4
function averageNumber (array) {

    sum = 0;

    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return Math.floor(Number(sum / array.length));
}

// Array Q5
function arrayPowers (array) { 

    newArray = [];

    // for (let index = 0; index < array.length; index++) { 
    //     newArray.push(Math.pow(2, array[index]));
    // }

    // array.forEach( (value) => newArray.push(Math.pow(2, value)));

    newArray = array.map( (value) => Math.pow(2, value) );

    return newArray;
}

// Array Q6
function oddOReven (array) { 
    
    newArray = [];

    newArray = array.map( (value) => {

        if(isNaN(value))
            return "N/A";
        return value % 2 == 0 ? "even" : "odd";
    });

    return newArray;
}

// Array Q7
function fizzbuzze (array) {

    let newArray = array.map( (value) => { 
            
        if (value % 3 === 0 && value % 5 === 0)
            return "FizzBuzz";

        else if (value % 3 === 0) 
            return "Fizz";

        else if (value % 5 === 0) 
            return "Buzz";
        
        return value;

    });

    return newArray;
}
