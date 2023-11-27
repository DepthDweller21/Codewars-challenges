function arrayDiff(a, b) {
    let c=a
    b.forEach(el=>c=c.filter(x=>x!=el))
    return c
  }