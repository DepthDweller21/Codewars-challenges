// first solution
function getCount(str) {
    let num=0,vowels=["a","e","i","o","u"],i=0,vowelCheck=false
    str.split('').forEach(x=>{
      i=0
      while(i<5&&vowelCheck==false){
        x==vowels[i]?(num++,vowelCheck=true):undefined
        i++
        vowelCheck=false
      }
    })
    return num
  }
// second solution
function getCount2(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }