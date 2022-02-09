// allow us to create iterators by defining a function
// creates iterators more efficiently
//to create a generator function use * before the name declaration
function *generator(){
  yield 'hi'
  yield 'hello'
}

const strings = generator()

//if we use yield* we call the execution to another function
function nameGenerator(){
  return 'Oi'
}

function *stringGenerator(){
  yield nameGenerator()
  yield 'Hi'
  yield ['A', 'B']
}

function* overrideValue() {
  const result = yield 'hi';
  console.log(result);
}

const overrideIterator = overrideValue();
console.log(overrideIterator.next());
overrideIterator.next('oi')
