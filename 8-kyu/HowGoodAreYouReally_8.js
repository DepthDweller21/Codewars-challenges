function betterThanAverage(classPoints, yourPoints) {
    let total=0
    classPoints.forEach(element=>{total+=element})
    let average=(total+yourPoints)/(classPoints.length+1)
    if(yourPoints>average){
      return true
    }
    return false
  }