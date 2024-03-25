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

// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0 ; i <= 10; i++){
    console.log(i)
}
let i = 0
while (i<=10) {
    console.log(i)
    i++
}
let i = 0
do {
  console.log(i)
  i++
} while (i <= 10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10 ; i >= 0; i--){
    console.log(i)
}
let i = 10
while (i>=0){
    console.log(i)
    i--
}
let i = 10
do {
    console.log(i)
    i--
} while (i>=0)

// Iterate 0 to n using for loop
for (let i = 0; i <= n; i++){
    console.log(i)
}

// Write a loop that makes the following pattern using console.log():
/*  #
    ##
    ###
    ####
    #####
    ######
    #######
*/
for (let i = 1; i <= 7; i++){
    console.log('#'.repeat(i))
}

// Use loop to print the following pattern:
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
for (i=0; i<=10; i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

// Using loop print the following pattern
/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
console.log('i\ti^2\ti^3')
for (i=0; i<=10; i++){
    console.log(`${i**1}\t${i**2}\t${i**3}`)
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (i=0; i<=100; i++){
    if (i%2==0) {
        console.log(i)
    } else {
        continue
    }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (i=0; i<=100; i++){
    if (i%2==1) {
        console.log(i)
    } else {
        continue
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
let count = 0
for (i=0; i<=100; i++) {
    if (i>1) {
        for (u=1; u<=i; u++) {
            if (i%u==0) {
                count++
            }
        }
        if (count==2) {
            console.log(i)
        }
        count=0
    }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for (i=0; i<=100; i++){
    sum += i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sum_odd=0
let sum_even=0
for (i=0; i<=100; i++) {
    if (i%2==0) {
        sum_even += i
    } else {
        sum_odd += i
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sum_even}. And the sum of all odds from 0 to 100 is ${sum_odd}.`)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sum_even_odd = [0,0]
for (i=0; i<=100; i++) {
    if (i%2==0) {
        sum_even_odd[0] += i
    } else {
        sum_even_odd[1] += i
    }
}
console.log(sum_even_odd)

// Develop a small script which generate array of 5 random numbers
let random_array = []
for (i=1; i<=5; i++) {
    random_array.push(Math.random())
}
console.log(random_array)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique


// Develop a small script which generate a six characters random id:
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let length = parseInt(prompt('Enter the random string length:'))
let result = ''
const charactersLength = characters.length
for (i=1; i<=length; i++) {
    result += characters.charAt(Math.floor(Math.random()*charactersLength))
}
console.log(result)