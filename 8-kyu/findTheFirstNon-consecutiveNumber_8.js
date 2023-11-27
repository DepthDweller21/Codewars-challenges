function firstNonConsecutive (arr) {
    let tempNum=arr[1],i=0,flag=false
    while(i<arr.length && flag==false){
      tempNum-1!=arr[i]?flag=true:(tempNum++,i++)
    }
    return flag===true?tempNum:null
  }