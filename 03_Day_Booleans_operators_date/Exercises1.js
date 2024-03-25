// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Phuc', lastName = 'Hoang', country = 'Vietnam', city = 'Ho Chi Minh', age = 35, isMarries = false, year = 2024
console.log(typeof firstName)

// Check if type of '10' is equal to 10
'10' == 10

// Check if parseInt('9.8') is equal to 10
parseInt('9.8') == 10

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
'abc'.length == 'def'.length
true && true
true || false

// Write three JavaScript statement which provide falsy value.
false && true
false || false
'abc' == 'def'

/* Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
4 > 3           true
4 >= 3          true
4 < 3           false
4 <= 3          false
4 == 4          true
4 === 4         true
4 != 4          false
4 !== 4         false
4 != '4'        false   (*)
4 == '4'        true    (*)
4 === '4'       false
Find the length of python and jargon and make a falsy comparison statement.
*/

/* Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12        true
4 > 3 && 10 > 12        false
4 > 3 || 10 < 12        true
4 > 3 || 10 > 12        true
!(4 > 3)                false                
!(4 < 3)                true
!(false)                true
!(4 > 3 && 10 < 12)     false
!(4 > 3 && 10 > 12)     true
!(4 === '4')            true
There is no 'on' in both dragon and python
*/

/* Use the Date object to do the following activities
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
const time = new Date()
console.log('The year is '+time.getFullYear())
console.log('The month is '+(time.getMonth()+1))
console.log('The date is '+time.getDate())
console.log('The day of week is '+time.getDay())
console.log('The hour is '+time.getHours())
console.log('The minute is '+time.getMinutes())
console.log('The number of seconds elapse from January 1, 1970 to now is '+ time.getTime())