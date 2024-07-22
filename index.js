// const txt = 'namaste'
// console.log(`${txt} rum`);
// console.log(`${txt} vod`);
// console.log(`${txt} nad`);
// console.log(`${txt} vir`);
// console.log(`${txt} rak`);

/* let age = 12;
console.log("age " + age);
let price = 100.5;
console.log("price " + price);
let verified = true;
console.log("verified " + verified) */


/* const colors = ['red', 'blue', 'gray', 10]
console.log(colors) */

/* const names = ['ron', 'rod', 'ros', 'rob'];
let i=1;

//Using WHILE LOOP
while (i <= names.length){
    names.splice(i,0,123);
    i += 2;
}

console.log(names);


colors = ['red', 'green', 'blue', "yellow"]

// Using FOR LOOP
for (let i=1; i<= colors.length; i+=2){
    colors.splice(i,0,'HEX-NUMBER');
}

console.log(colors); */


/* let brand = {
    name: 'apple',
    ceo: 'steve jobs',
    website: 'https:\\apple.com',
    netWorth: '5 billion'
}

console.log(brand); */

/* const users = [
    {
        name: 'ram',
        number: 12312334,
        address: {
            tempAddress: 'gonabu',
            permAddress: 'busik'
        }
    },
    {
        name: 'hari',
        number: 123675,
        address: {
            tempAddress: 'doogus',
            permAddress: 'gusit'
        }
    },
    {
        name: 'sita',
        number: 123675,
        address: {
            tempAddress: 'butica',
            permAddress: 'hansur'
        }
    }
]

users[0].number = 9818302304;
users[1].name = 'hari prasad';
users[2].address.tempAddress = 'buspark';

console.log(users); */



/* const Prices = {
    apple: [
        {
            country: 'USA',
            price: 1
        },
        {
            country: 'Australia',
            price: 4
        },
        {
            country: 'Nepal',
            price: 10
        },
        {
            country: 'Canada',
            price: 3
        }
    ],
    mango: [
        {
            country: 'USA',
            price: 2
        },
        {
            country: 'Australia',
            price: 5
        },
        {
            country: 'Nepal',
            price: 14
        },
        {
            country: 'Canada',
            price: 4
        }
    ]
    
} */

/* fruit1 = {
    name: "kiwi",
    scientificName: "k-wrong-xyz",
    prices: [
        {
            country: "nepal",
            price: 1, // change this to 100
        },
        {
            country: "us",
            price: 1,
        },
        {
            country: "au",
            price: 1.5,
        },
    ],
}

fruit1.prices[0].price = 100;
console.log(fruit1.prices[0].price) */


/* let backendResponse = {
    msg: "success",
    result: {
        total: 2,
        data: [
            {
                name: "kiwi",
                scientificName: "k-wrong-xyz",
                prices: [
                    {
                        country: "us",
                        price: 1,
                    },
                    {
                        country: "nepal",
                        price: 1, // change this to 100
                    },
                ],
            },
            {
                name: "orange",
                scientificName: "k-xyz",
                prices: [
                    {
                        country: "us",
                        price: 2,
                    },
                    {
                        country: "nepal",
                        price: 200,
                    },
                    {
                        country: "cad",
                        price: 200,
                    },
                ],
            },
        ],
    },
}

console.log(backendResponse.result.data[0].prices[1].price);
backendResponse.result.data[0].prices[1].price = 100;
console.log(backendResponse.result.data[0].prices[1].price);
console.log(backendResponse); */


/* backendResponse.result.data[0].prices.push({
    country: "cad",
    price: 200,
}) */

/* backendResponse.result.data[0].prices[2] = {
    country: "cad",
    price: 200,
}

console.log(backendResponse.result.data[0].prices[2]); */

/* let a = 1;
let b = 2;
let c = 4;
let d = 5;
let e = 6;
let f = 40;

console.log(`${a} + ${b} = ${a + b}
${d} + ${c} = ${d + c}
${d} + ${e} = ${d + e}
${d} + ${f} = ${d + f}`)

console.log(`The sum of ${a} and ${b} is ${a + b}
The sum of ${d} and ${c} is ${d + c}
The sum of ${d} and ${e} is ${d + e}
The sum of ${d} and ${f} is ${d + f}
`); */

/* const output = ''
const sum = (a, b) => {
    output = `The sum of ${a} + ${b} is ${a + b}`
    return output;
}
console.log(sum(1, 2)); */

/* let fruitsData = [
    {
        name: "kiwi",
        scientificName: "k-wrong-xyz",
        price: 100,
    },
    {
        name: "orange",
        scientificName: "k-xyz",
        price: 50,
    },
    {
        name: "apple",
        scientificName: "k-xyz",
        price: 150,
    },
] */



// OBJECT DESTRUCTURING IN LOOP

/* for (let {name,price} of fruitsData) {
    console.log(`The price of ${name} is ${price}`)
} */


/* 
    CALLBACK = A function that is passed as an argument
               to another function

               used to handle asynchronous operations
               1. Reading a file
               2. Network Requests
               3. Interacting with databases

               "Hey, when you're done, call this next"

*/

/* sum(displayResult, 1, 2) 

const sum = (callback, x, y) => {
    let result = x + y;
    callback(result)
}

const displayResult = (result) => {
    console.log(result);
}

const displayH1 = (result) => {
    document.getElementById('heading').textContent = result;
} */


// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//               Allows you to write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue+





/* let number1 = 100
let number2 = 2
let sum = number1 + number2
console.log(number1, "+", number2, "=", number1 + number2)


number1 = 50
number2 = 50
sum = number1 + number2
console.log(number1, "+", number2, "=", number1 + number2)
console.log("the sum of ", number1, " and", number2, "is", sum)

number1 = 150
number2 = 50
sum = number1 + number2
console.log(number1, "+", number2, "=", number1 + number2)
console.log("the sum of ", number1, " and", number2, "is", sum) */


/* const sum = (...numbers) => {
    let result = 0;
    numbers.forEach((num) => {
        result += num
    })
    console.log(result);
    // callback(result)
} */

/* const remainderByTwo = (result) => {
    console.log(`The sum of the two numbers is ${result} and the remainder of the given number when divided by two is: ${result % 2}`);
} */

// sum(5, 5, 5, 5, 5, 5, 5, 5, 5)


/* const sub = (...numbers) => {
    numbers.reduce((accumulator, element) => {
        return accumulator + element;
    })
} */

/* const arr = [1,2,3]
const reduced = arr.reduce((accumulator,element) => {
    return accumulator + element;
})
console.log(reduced); */
/* const result = sub(1, 2, 3)
console.log(result); */



/* const sum = (num1,num2) => {
    return num1+num2;
}

const double = (num) => {
    return num*2;
}

console.log(sum(double(10), double(5))); */