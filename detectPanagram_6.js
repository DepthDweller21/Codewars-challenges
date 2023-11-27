function isPangram(string){
    let array=string.toUpperCase().split('')
    let elements= new Set(array.filter(x=>/^[A-Z]/ig.test(x)))
    return elements.size==26
  }