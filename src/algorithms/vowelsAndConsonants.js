function vowelsAndConsonants(s) {
  // * put vowels in an array;
  const vowels = s.match(/[aeiou]/gi);
  // * put consonants in another array;
  const consonants =  s.match(/[^aeiou]/gi);
  // * concat 2 arrays;
  return vowels.concat(consonants).forEach(k => { console.log(k) })
  // * make a for loop to show indexes;
}

console.log(vowelsAndConsonants('javascriptloops'))
