function shortestDistance(a, b, c) {
    let arr=[a,b,c]
    arr=arr.sort((x,y)=>x-y)
    return Math.sqrt( (arr[0]+arr[1])**2+arr[2]**2)
  }