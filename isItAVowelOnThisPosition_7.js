function checkVowel(s,p) {
    return /[aeiou]/ig.test(s[p]||'')
  };