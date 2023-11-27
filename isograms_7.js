function isIsogram(str){
    let arr=str.toLowerCase().split('')
    let flag=true
    arr.forEach(x=>{
      let count=0
      arr.forEach(y=>{
        console.log(count)
        x==y?count++:null
        count==2?flag=false:null
      })
    })
    return flag
  }