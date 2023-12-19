function receivesAFunction(callback) {
  return callback()
}
console.log(receivesAFunction(function () {return "stored in the callback variable"}))


function returnsANamedFunction(){
  function namedFunction() {
    console.log("I am a named function")
  }
  return namedFunction
}

function returnsAnAnonymousFunction(){
  return function (){
    console.log("Anonymous function")
  }
}
const myFunction = returnsAnAnonymousFunction()
myFunction()
