var isSquare = function(n){  
    return n<0?false:Math.sqrt(n)-Math.floor(Math.sqrt(n))>0?false:true
  }