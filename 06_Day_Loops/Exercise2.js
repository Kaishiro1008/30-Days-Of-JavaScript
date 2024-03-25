const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Develop a small script which generate any number of characters random id:
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let length = parseInt(prompt('Enter the random string length:'))
let result = ''
const charactersLength = characters.length
for (i=1; i<=length; i++) {
    result += characters.charAt(Math.floor(Math.random()*charactersLength))
}
console.log(result)

// Write a script which generates a random hexadecimal number.
const characters = '1234567890abcdef'
let result = '#'
const charactersLength = characters.length
for (i=1; i<=6; i++) {
    result += characters.charAt(Math.floor(Math.random()*charactersLength))
}
console.log(result)

// Write a script which generates a random rgb color number.
let color = new Array(3)
for (i=0; i<=2; i++) {
    color[i] = Math.floor(Math.random()*255)
}
console.log(`rgb(${color[0]},${color[1]},${color[2]})`)

// Using the above countries array, create the following new array.
let upper_case_country = new Array
for (let country of countries) {
    upper_case_country.push(country.toUpperCase())
}
console.log(upper_case_country)

// Using the above countries array, create an array for countries length'.
let length_country = new Array
for (let country of countries) {
    length_country.push(country.length)
}
console.log(length_country)

// Use the countries array to create the following array of arrays:
let countries_name_lenght = new Array
for (let country of countries) {
    countries_name_lenght.push([country,country.slice(0,3).toUpperCase(),country.length])
}
console.log(countries_name_lenght)

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let country_with_land = new Array
for (let country of countries) {
    if (country.includes('land')) {
        country_with_land.push(country)
    }
}
if (country_with_land.length!=0) {
    console.log(country_with_land)
} else {console.log('All these countries are without land')}

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let country_end_with_ia = new Array
for (let country of countries) {
    if (country.lastIndexOf('ia')!=-1) {
        country_end_with_ia.push(country)
    }
}
if (country_end_with_ia.length!=0) {
    console.log(country_end_with_ia)
} else {console.log('These are countries ends without ia')}

// Using the above countries array, find the country containing the biggest number of characters.
let biggest_number_country = ''
let max_length = 0
for (let country of countries) {
    if (country.length>max_length) {
        max_length = country.length
        biggest_number_country = country
    }
}
console.log(biggest_number_country)

// Using the above countries array, find the country containing only 5 characters.
let country_with_5 = new Array
for (let country of countries) {
    if (country.length==5) {
        country_with_5.push(country)
    }
}
console.log(country_with_5)

// Find the longest word in the webTechs array
let longest_webTechs = ''
let max_length = 0
for (let word of webTechs) {
    if (word.length>max_length) {
        max_length = word.length
        longest_webTechs = word
    }
}
console.log(longest_webTechs)

// Use the webTechs array to create the following array of arrays:
let webTechs_length = new Array
for (let word of webTechs) {
    webTechs_length.push([word,word.length])
}
console.log(webTechs_length)

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon']
const reverse_fruits = new Array
for (i=(fruits.length-1); i>=0; i--) {
    reverse_fruits.push(fruits[i])
}
console.log(reverse_fruits)

// Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for (let word of fullStack) {
    for (let word1 of word) {
        console.log(word1)
    }
}