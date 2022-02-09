const usersByCities = {
  ['Buenos Aires']: [
    'Javier',
    'Charles',
    'Bill'
  ],
  ['Salt Lake City']: [
    'Morgan',
    'Marston',
    'Dutch'
  ],
  ['Paris']: [
    'Jean Valjean',
    'Cosette',
    'Fantine'
  ],

  [Symbol.iterator]: function(){

    const cityKeys = Object.keys(this)
    let userIndex = 0
    let cityIndex = 0

    return {

      next: () => {
        if(cityIndex > cityKeys.length - 1){
          return {
            done: true,
            value: undefined
          }
        }
        let city = this[cityKeys[cityIndex]]
        let user = city[userIndex]
        userIndex++
        if(userIndex > city.length - 1){
          cityIndex ++
          userIndex=0
        }
        return {
          done: false,
          value: user
        }
      }
    }
  }
}

for(let user of usersByCities){
  console.log(user)
}