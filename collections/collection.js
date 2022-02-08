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


//--------MapIterator: keys(), values(), entries()

const ageMap = new Map([
  ['Jack', 20],
  ['Alan', 34],
  ['Bill', 10],
  ['Sam', 9]
])

const keys = ageMap.keys()

const values = ageMap.values()

const entries = ageMap.entries()

// ITERATE OVER A MAP
ageMap.forEach((value, key) => {
})

for(const [x,y] of ageMap){
}

//converting object into a map
const address = {
  "Felipe": "Brazil",
  "Rekkles": "Sweden",
  "Nemesis": "Slovenia"
}

const addressMap = new Map((Object.entries(address)))

// converting map into object

const reverse = Object.fromEntries(addressMap)
//fromEntries transforma uma list de chave-valor em um objeto
const list = [
  ["Key4", "Value1"],
  ["Key2", "Value2"],
  ["Key3", "Value3"],
  ["Key4", "Value4"],
]
const listReverse = Object.fromEntries(list)

//convert map into array
const map1 = new Map()
map1.set('milk', 200)
map1.set('tea', 300)
map1.set('coffee', 500)

const toArray = Array.from(map1)

// Array.from
const myNewObject = {
  '0': 'a',
  '1': "Felipe",
  '2': 'red'
}

const toArray1 = Array.from(myNewObject)
console.log(toArray1)