function createIterator(array){
  var nextIndex = 0;

  return {
    next: function(){
      var value = array[nextIndex] || undefined;
      var hasNext = nextIndex < array.length-1;
      nextIndex++;
      return { value: value, hasNext: hasNext };
    }
  }
}

module.exports.createIterator = createIterator;
