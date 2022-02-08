/*
Map is a collection of key-value pairs where the key can be of any type
It remembers the original order in which the elements were added to it
*/

//without initial values
const map = new Map()

//with initial values
const game = new Map([
  ['name', 'the last of us'],
  ['type', 'adventure'],
  ['brand', 'sony']
])

//add values to a map
map.set('color', 'red')

//get values from a map
const value = (game.get('name'))

//using object as key

let object = ["Gaspar", "Evaristo"]

const funMap = new Map()
funMap.set(12, 'My house number')
funMap.set(true, 'I like studying JavaScript')
funMap.set(object, 'My dogs names')

//has method
const has = (funMap.has(
  object
))

//size
const size = (funMap.size)

//delete 
const deleteFun = (funMap.delete(12))