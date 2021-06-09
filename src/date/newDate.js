let d = new Date();

console.debug('d new Date() = ', d)
console.debug('d.toString() = ', d.toString())
console.debug('Date.now() = ', Date.now())
console.debug('Date.parse(new Date()) = ', Date.parse(new Date()))
console.debug('d.getDate() = ', d.getDate())
console.debug('d.getMonth() = ', d.getMonth()) // 0-11
console.debug('d.getFullYear() = ', d.getFullYear())
console.debug('d.getHours() = ', d.getHours())
console.debug('d.getMilliseconds() = ', d.getMilliseconds())
console.debug('d.getMinutes() = ', d.getMinutes())
console.debug('d.getSeconds() = ', d.getSeconds())
console.debug('d.getTime() = ', d.getTime())
console.debug('d.getYear() = ', d.getYear()) // last 3 digits
console.debug('d.setFullYear() = ', d.setFullYear(2020))
