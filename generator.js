function* idGenerator(){
  var index = 0;
  while(true){
    yield index++;
  }
}

var gen = idGenerator();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

function* fibonacci(){
  var value1 = 1;
  var value2 = 1;
  yield value1;
  yield value2;

  while (true) {
    var current = value1 + value2;
    value1 = value2;
    value2 = current;
    yield current;
  }
}

var fibo = fibonacci();
// print first 20 values of fiboacci sequence
for (var i = 0; i < 20; i++){
  console.log(fibo.next().value);
}
