const myArray = [ 1,2,3,4 ]
const myIterator = Symbol.iterator

const myPrototype = {
  sayHello: () => {
    console.log('Hello!')
  }
}

const mySecondPrototype = {
  sayHi: () => {
    console.log("Hi!")
  }
}

const myObject = {
  __proto__: myPrototype,
  numbers: [1,2,3,4],
 //[ " __proto__ "] : mySecondPrototype
 //using it this way doesn't changes the object prototype, instead it creates an method or property for this object
 //with the name of "__proto__"
}

// myObject.sayHello()
// myObject.__proto__.sayHi()

//Computed Property Names
//Allow us to create properties with variables nanes without having to initialize it before
//Without Computed Properties:
const key = 'Property'
const value = 'Value'
const myObjectWithoutComputed = {}
myObjectWithoutComputed[key] = value
//With Computed Properties:
const myObjectWithComputed = {
  [key]: value
}

//@@hasInstance
class Iterable{
  static [Symbol.hasInstance](obj){
    return typeof obj[Symbol.iterator] === 'function'
  }
}

let string = 'welcome'
//console.log(
  //now this is the equivalent of calling static [Symbol.hasInstance](obj)
//  string instanceof Iterable)


//@@toPrimitive
//Specifies a property that is a function that transforms an object to a primitive
function arrayToPrimitive(hint){
  if(hint === 'number'){
    return this.reduce((sum , num) => sum+num)
  }else if(hint === 'string'){
    return `[${this.join(', ')}]`
  }else{
    return this.toString()
  }
  
}

let array = [1,5,3]
array[Symbol.toPrimitive] = arrayToPrimitive
// Using + array executes the toPrimitive method passing the number as hint
// console.log(+ array)
// using `array is ${array}` calls the toPrimitive passing with hint 'string
// console.log(`array is ${array}`)
// using array elements with ''
// console.log(''+ array)


//@@toStringTag
// uses to describe the type of an object
let toString = Object.prototype.toString
//console.log(Symbol.iterator[Symbol.toStringTag])
//console.log(new Map()[Symbol.toStringTag])

class myClass{
  constructor(){
    this[Symbol.toStringTag] = 'MyType'
  }
}


// @@species
//specifies a property whose value is a constructor function that create derived objects
// exemplo Array.map
class MyArray extends Array {
  isEmpty(){
    return this.length === 0
  }

  //retorna um array mantendo o construtor original da função
  static get [Symbol.species](){
    return Array
  }
}
// se eu não tivesse esse construtor ao executar um array.filter iria retornar um objeto do tipo MyArray invés de Array


//@@isConcatSpreadable
//changes the behavior of .concat
//if false it doesn't spread the array, if so, it spreads thats it \_(lol)_/
let letters = ['a', 'b'];
letters[Symbol.isConcatSpreadable] = true;
let otherLetters = ['c', 'd'];
const result = otherLetters.concat('e', letters);
// console.log(result)
//this doesn't have much use, but the big use is with objects
let alphabet = ['a','b']
let lettersFromAlphabet = {
  0: "c",
  1: 'd',
  2: 'e',
  length: 3
}
lettersFromAlphabet[Symbol.isConcatSpreadable] = true
const myNewResult = alphabet.concat('z', lettersFromAlphabet)
console.log(myNewResult)


