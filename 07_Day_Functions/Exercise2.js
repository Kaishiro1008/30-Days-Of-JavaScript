// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.


// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
/*
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
*/
function solveQuadratic(a=1,b=0,c=0) {
    let d = b**2 - 4*a*c
    switch (true){
        case (d>0):
            return [(-b + Math.sqrt(d))/(2*a),(-b - Math.sqrt(d))/(2*a)]
            break
        case (d==0):
            return [-b/(2*a)]
            break
        case (d<0):
            return null
            break
    }
}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray() {
    for (let args of arguments) {
        console.log(args)
    }
}
const printArray_A = (...args) => {
    for (let a of args) {
        console.log(a)
    }
}

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const now = new Date()
    const year = now.getFullYear() 
    const month = now.getMonth() + 1 
    const date = now.getDate() 
    const hours = now.getHours() 
    const minutes = now.getMinutes()
    console.log(`${month<10 ?'0'+month :month}/${date<10 ?'0'+date :date}/${year} ${hours<10 ?'0'+hours :hours}:${minutes<10 ?'0'+minutes :minutes}`)
}

// Declare a function name swapValues. This function swaps value of x to y.

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
/*
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
*/
function reverseArray(array=[]) {
    let reverse = new Array
    for ((i=array.length-1); i>=0; i--) {
        reverse.push(array[i])
    }
    return reverse
}

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray() {
    let capitalizedarray = new Array
    for (let arg of arguments) {
        capitalizedarray.push(arg.toUpperCase())
    }
    return capitalizedarray
}

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// Write a function which takes any number of arguments and return the sum of the arguments

// Writ a function which generates a randomUserIp.

// Write a function which generates a randomMacAddress

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
/*
console.log(randomHexaNumberGenerator());
'#ee33df'
*/

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
/*
console.log(userIdGenerator());
41XTDbE
*/
