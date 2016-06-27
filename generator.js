function* idGenerator(){
  var index = 0;
  while(true){
    yield index++;
  }
}

var gen = idGenerator();

function* fibonacci(a, b){
  var value1 = a;
  var value2 = b;
  yield value1;
  yield value2;

  while (true) {
    var current = value1 + value2;
    value1 = value2;
    value2 = current;
    yield current;
  }
}

function *add(x, y){
  return x + y;
}


module.exports.fibonacci = fibonacci;
module.exports.add = add;
