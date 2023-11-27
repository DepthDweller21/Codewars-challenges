//first solution
function solution(str, ending){
    let index =str.length-(ending.length)
    let flag=true
    ending.split('').forEach(letter=>{
      letter==str[index]?null:flag=false
      index++
    })
    return flag
  }
//second solution
function solution2(str, ending){
    return str.endsWith(ending)
  }