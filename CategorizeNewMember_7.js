function openOrSenior(data){
    let result=[]
    data.forEach(x=>{
      x[0]>=55&&x[1]>7?result.push('Senior'):result.push('Open')
    })
    return result
  }