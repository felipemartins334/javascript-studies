// symbols são valores únicos
// they are also non-enumerable and anonymous
const blue = Symbol('blue')

const cat = 'blue'

function getLevelThreat(color){
  switch(color){
    case(blue):
  //    console.log("Severe")
      break
    default:
     // console.log("Invalid")
  }
}

getLevelThreat(blue)
getLevelThreat(cat)
//Even though they represent the same value they're not the same doing this prevent
//unexpected behaviors on some environments

const myObject = { 'name': "Evaristo" }
//every time I call this function i'm creating a string 'name' in memory
//if I have multiple queries it can cause a slow performance.
//to fix this create a symbol for the name, meaning it's unique.
//const name = Symbol()
const myNewObject = { ['name']: "Evaristo" }

//we can use strings too
const tryName = 'name'
const mySuperNewObject = { [tryName]: 'Hello!' }

//enum
const directions = {
  RIGHT: Symbol('Right'),
  LEFT: Symbol('Left')
}

function keyPressed(key){
  switch (key){
    case directions.LEFT: console.log("LEFT"); break;
    case directions.RIGHT: console.log("RIGHT"); break;
  }
}

//keyPressed(directions.RIGHT)

const contador = Symbol()
const SomeObject = {
  name: "Doof",
  //to use a symbol property we have to involve it with []
  [contador]: 1,
  increment(){
    SomeObject[contador]++
  }
}
const token = Symbol.for('Token')
const key = Symbol.keyFor(token)
console.log(typeof key)
 

export { SomeObject } 
