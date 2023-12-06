function cakes(recipe, available) {
    let negative=false
    let cakes=0
    while(negative===false){
      for(let property in recipe){
        !available[property]?available[property]=0:null;
        available[property]-=recipe[property]
        if(available[property]<0){
          negative=true
        }
      }
      cakes++
    }
    return cakes-1
  }