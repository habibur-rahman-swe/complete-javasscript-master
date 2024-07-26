'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive:D`)

// // const interface = 'Audio';
// // const private = 434;

// function logger() {
//     console.log('My name is Jonas')
// }

// logger()

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(5, 0));

// function expression
/*
const calcAge2 = function(birthYear) {
    return 2024 - birthYear;
}

// Arrow function 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991, 'Boll'))
*/

// const friend1 = 'Micha';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];

// console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years.length)

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay')

// friends.unshift('John')

// const poped = friends.pop()
// // console.log(poped)
// friends.push('Hai')

// console.log(friends.indexOf('Steven'))
// console.log(friends)

// console.log(friends.includes('Steven'))
// friends.push(23)

// const johnasArray = [
//     'Jonas',
//     'Schmedtamann',
//     2017 - 2019,
//     ['Michael', 'Peter', 'Steven']
// ]
// console.log(johnasArray)

// const jonas = {
//     firstName: 'Jonas',
//     secondName: 'Schmedmann',
//     age: 2037 - 1991,
//     job: 'techer',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(jonas.secondName)
// console.log(jonas['firstName'])

// const x = 23;

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Degrees celsius:')
    }

    const kelvin = measurement.value + 273;
    // console.warn(kelvin)
    // console.error(kelvin)
    console.table(measurement)
    return kelvin;
}

console.log(measureKelvin());
