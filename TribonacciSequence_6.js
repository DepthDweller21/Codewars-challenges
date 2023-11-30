function tribonacci(signature,n){
    let array=signature
    while(array.length<n){
      array.push(array.slice(array.length-3).reduce((a,b)=>a+b,0))
    }
    return array.slice(0,n)
  }