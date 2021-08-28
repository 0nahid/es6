function log(anything) { return console.log(anything) } // declare console

// Arrow function
const sum = (a, b) => a + b
log(sum(2, 6)) // prints 8

// Default parameters
function print(a = 5) {
    log(a)
}
print() // prints 5
print(22) // prints 22

// let scope
let a = 3
if (true) {
    let a = 5
    log(a) // prints 5
}
log(a) // prints 3

// const
// can be assigned only once:
const e = 55
// e = 44 // throws an error

// Multiline strings
log(`
  This is a 
  multiline string
`)

// Template strings
const tempName = 'Leon'
const message = `Hello ${tempName}`
log(message) // prints "Hello Leon"

// String includes()
log('apple'.includes('pl')) // prints true
log('apple'.includes('tt')) // prints false

// String startsWith()
log('apple'.startsWith('ap')) // prints true
log('apple'.startsWith('bb')) // prints false

// String repeat()
log('ab'.repeat(5)) // prints "ababababab"

// Destructuring array
let [x, y] = [3, 7];
log(x); // 3
log(y); // 7

// Destructuring object
let obj = {
    m: 55,
    n: 44
};

let { m, n } = obj;

log(m); // 55
log(n); // 44

// object property assignment
const g = 2
const h = 5

const obj1 = { g, h }

// // Before es6:
// obj1 = { g: g, h: h }

log(obj1) // prints { g: 2, h: 5 }

// object function assignment
const obj2 = { 
    a: 5, 
    b() {
        log('b')
    } 
}

obj2.b() // prints "b"

// spread operator
const i = [ 1, 2 ]
const j = [ 3, 4 ]

const k = [ ...i, ...j ]

log(k) // [1, 2, 3, 4]

// Object.assign()
const obj3 = { a: 1 }
const obj4 = { b: 2 }

const obj5 = Object.assign({}, obj3, obj4)

log(obj5) // { a: 1, b: 2 }


// Object.entries()
const obj6 = {
  firstName: 'Nahid',
  lastName: 'Hassan',
  age: 20,
  country: 'Hassan',
};

const entries = Object.entries(obj6);  
/* returns an array of [key, value] 
   pairs of the object passed
*/

log(entries);  
/* prints
   [
     ['firstName', 'Nahid'], 
     ['lastName', 'Hassan'], 
     ['age', 20], 
     ['country', 'Hassan']
   ];
*/

// spread operator
const o = {
    firstName: "Nahid",
    lastName: "Hassan",
}

const p = {
    ...o,
    lastName: "White",
    canSing: true,	
}

log(o) // {firstName: "Nahid", lastName: "Hassan"}

log(p) // {firstName: "Nahid", lastName: "White", canSing: true}

// great for modifying objects without side effects/affecting the original

// Destructuring Nested Objects
const Person = {
    name: "Nahid",
    age: 20,
    sex: "male",
    materialStatus: "single",
    address: {
        country: "Bangladesh",
        state: "Tangail",
        city: "Sakhipur",
        pinCode: "z1950",
    },
};

const { address: { state, pinCode }, name } = Person;

log(name, state, pinCode) // Nahid Tangail z1950

// Exponent operator
const byte = 2 ** 8;
log(byte)

// Same as: Math.pow(2, 8)