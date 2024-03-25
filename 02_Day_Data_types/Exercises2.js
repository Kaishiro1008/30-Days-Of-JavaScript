// Using console.log() print out the following statement:

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

// Using console.log() print out the following quote by Mother Teresa:
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
typeof '10' == typeof 10
typeof +'10' == typeof 10
typeof parseInt('10') == typeof 10
typeof Number('10') == typeof 10

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
parseFloat('9.8') == 10
Math.round(parseFloat('9.8')) == 10

// Check if 'on' is found in both python and jargon
'python'.search('on') != -1
'jargon'.search('on') != -1

// I hope this course is not full of jargon. Check if jargon is in the sentence.
'I hope this course is not full of jargon.'.search('jargon') != -1

// Generate a random number between 0 and 100 inclusively.
Math.random() * 100

// Generate a random number between 50 and 100 inclusively.
100 - Math.random() * 50 

// Generate a random number between 0 and 255 inclusively.
Math.random() * 255

// Access the 'JavaScript' string characters using a random number.
let test = 'JavaScript'
console.log(test.charAt(Math.round(Math.random() * test.length)))

// Use console.log() and escape characters to print the following pattern.
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
'You cannot end a sentence with because because because is a conjunction'.substr(31,23)