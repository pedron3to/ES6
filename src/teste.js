function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
      if( s[i].match(/aeiou/)) {
          console.log(s[i])
      }
  }
}

vowelsAndConsonants("java")