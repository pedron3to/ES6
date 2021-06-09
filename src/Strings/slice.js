const text = 'I can eat bananas all day'

//console.debug('slice bananas', text.slice(10, 17))
console.debug('slice bananas', text.slice(text.indexOf("b"), (text.indexOf("s")) + 1))
console.debug('indefOf', text.indexOf("b"))
console.debug('indefOf', text.indexOf("s"))
