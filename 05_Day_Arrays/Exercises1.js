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
// Declare an empty array;
const emt = []

// Declare an array with more than 5 number of elements
const arrayof5 = Array(5)

// Find the length of your array
console.log(arrayof5.length)

// Get the first item, the middle item and the last item of the array
console.log(countries[0])
console.log(countries[countries.length-1])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [true, 11, 'yes', null]
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
console.log(itCompanies)

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompaniesp[0])
console.log(itCompanies[itCompanies.length-1])
console.log(itCompanies[parseInt(itCompanies.length/2)])

// Print out each company
for (const company of itCompanies) {
    console.log(company)
}

// Change each company name to uppercase one by one and print them out
for (const company of itCompanies) {
    console.log(company.toUpperCase())
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', '))

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = prompt('Enter company name:')
if (itCompanies.includes(company)) {
    console.log(itCompanies[itCompanies.indexOf(company)])
} else {
    console.log('Company not found')
}

// Filter out companies which have more than one 'o' without the filter method
for (const company in itCompanies) {
    if (/o{2,}/gm.test(company)) {
        let index = itCompanies.indexOf(company)
        itCompanies.splice(index,1)
    }
}

// Sort the array using sort() method
itCompanies.sort()

// Reverse the array using reverse() method
itCompanies.reverse()

// Slice out the first 3 companies from the array
itCompanies.slice(0,3)

// Slice out the last 3 companies from the array
itCompanies.slice(itCompanies.length-4)

// Slice out the middle IT company or companies from the array
itCompanies.slice(parseInt(itCompanies.length/2),parseInt(itCompanies.length/2)+1)

// Remove the first IT company from the array
itCompanies.shift()

// Remove the middle IT company or companies from the array
itCompanies.splice(parseInt(itCompanies.length/2),1)

// Remove the last IT company from the array
itCompanies.pop()

// Remove all IT companies
itCompanies.splice()