function regexVar(s) {
    // if (s.length < 2) {
    //   return false
    // } 
    // const consonants = /[^aeiou]/;

    // if (consonants.test(s.charAt(0)) === true) {
    //   return false
    // }

    // let re = s.charAt(0) === s.charAt(s.length-1);

    // console.log(re)

    // return re

      let re = /^([aeiou]).+\1$/.test(s);
      return re;
          
}


  
 


console.log(regexVar('dd'))

