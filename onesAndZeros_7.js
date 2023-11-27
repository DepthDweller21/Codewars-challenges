const binaryArrayToNumber = arr => {
    return arr.map((el,ind)=>el==1?2**(arr.length-ind-1):0).reduce((x,y)=>x+y,0)
  };