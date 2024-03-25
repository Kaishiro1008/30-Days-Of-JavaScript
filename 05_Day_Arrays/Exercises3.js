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
//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
ages.sort()
let min = ages[0], max = ages[ages.length-1]
console.log('Min age: '+ages[0])
console.log('Max age: '+ages[ages.length-1])

// Find the median age(one middle item or two middle items divided by two)
if (ages.length%2 == 0) {
    console.log('Median age: '+((ages[ages.length/2]+ages[ages.length/2-1])/2))
}

// Find the average age(all items divided by number of items)
let sum = 0
for (let age of ages) {
    sum += age
}
let average = sum / ages.length
console.log('Average age: '+(sum/ages.length))
// Find the range of the ages(max minus min)
console.log('Range of the ages: '+(max-min))

// Compare the value of (min - average) and (max - average), use abs() method
Math.abs()

// Slice the first ten countries from the countries array
countries.slice(0,10)

// Find the middle country(ies) in the countries array


// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countries1 = new Array
let countries2 = new Array
if (countries.length%2 == 0) {
    countries1 = countries.slice(0,countries.length/2)
    countries2 = countries.slice(countries.length/2)
} else {
    countries1 = countries.slice(0,Math.round(countries.length/2))
    countries2 = countries.slice(Math.round(countries.length/2))
}