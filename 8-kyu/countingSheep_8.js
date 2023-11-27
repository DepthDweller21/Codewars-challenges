function countSheeps(sheep) {
    let i=0
    sheep.forEach(x=>x==true?i++:null)
    return i
  }