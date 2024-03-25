/*Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100
*/
let base = parseInt(prompt('Enter base'))
let height = parseInt(prompt('Enter height'))
alert('The area of the triangle is '+(1/2*base*height))

/* Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/
let a = parseInt(prompt('Enter side a'))
let b = parseInt(prompt('Enter side b'))
let c = parseInt(prompt('Enter side c'))
alert('The perimeter of the triangle is '+(a+b+c))
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let rbase = parseInt(prompt('Enter the rectangle base'))
let rheight = parseInt(prompt('Enter the regtangle height'))
alert('The area of rectangle is '+(rbase*rheight)+'\n'+'The perimeter of rectangle is '+(2*(rbase+rheight)))

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let rad = parseInt(prompt('Enter radius'))
const pi = Math.PI
alert('The area of a circle is '+(pi*rad*rad)+'\n'+'The circumference of a circle is '+(2*pi*rad))

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
alert('For y = 2x - 2 \n'+'x-intercept is '+(2*0-2)+'\n'+'y-intercept is '+(2/2))

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
alert('The slope between point (2, 2) and point (6,10) is '+((10-2)/(6-2)))

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

/* Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
*/
let hour = parseInt(prompt('Enter hours:'))
let rate = parseInt(prompt('Enter rate per hour:'))
alert('Your weekly earning is '+(hour*rate))

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt('Enter your name')
name.length > 7
 ? alert('your name is long')
 : alert('your name is short')

/* Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh
*/
let firstName = prompt('Enter your firt name')
let lastName = prompt('Enter your family name')
firstName.length > lastName.length
 ? alert('Your first name, '+firstName+' is longer than your family name, '+lastName)
 : alert('Your first name, '+firstName+' is shorter than your family name, '+lastName)

/* Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.
*/
let myAge = 250
let yourAge = 25
myAge > yourAge
 ? console.log('I am '+(myAge-yourAge)+' years older than you.')
 : console.log('I am '+(yourAge-myAge)+' years younger than you.')

/* Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.
*/
const now = new Date()
let yearOfBirth = parseInt(prompt('Please enter your birth year'))
let userAge = now.getFullYear() - yearOfBirth
userAge >= 18
 ? alert(`You are ${userAge}. You are old enough to drive`)
 : alert(`You are ${userAge}. You will be allowed to drive after ${18-userAge} years.`)

/* Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of years you live: 100
You lived 3153600000 seconds.
*/
let yearLive = parseInt(prompt('Enter number of years you live:'))
alert('You lived '+(yearLive*365*24*60*60)+' seconds.')

/* Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes()
console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)