const sumNested = arr => {
    let total=0
    arr.forEach(el=>{
      if(typeof el=='number'){
        total+=el
      }else{
        total+=sumNested(el)
      }
    })
    return total
  };