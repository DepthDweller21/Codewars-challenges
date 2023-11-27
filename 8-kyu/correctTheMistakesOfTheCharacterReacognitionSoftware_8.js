function correct(string){
	let str=string.replaceAll('0','O')
  str=str.replaceAll('5','S')
  str=str.replaceAll('1','I')
  return str
}