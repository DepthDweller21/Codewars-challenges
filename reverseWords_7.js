const reverse=str=>str.split('').reverse().join('')
function reverseWords(str) {
  return str.split(' ').map(el=>reverse(el)).join(' ')
}
//error, accidentally used different username