// Declare a function fullName and it print out your full name.
function fullName() {
    console.log('Phuc Hoang')
}

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName = 'Phuc', lastName = 'Hoang') {
    console.log(`${firstName} ${lastName}`)
}

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1,num2) {
    return num1+num2
}
const addNumbers_A = (num1,num2) {
    return num1+num2
}

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width) {
    return length*width
}
const areaOfRectangle_A = (length,width) => {
    return length*width
}

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length,width) {
    return 2*(length+width)
}
const perimeterOfRectangle_A = (length,width) => {
    return 2*(length+width)
}

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length,width,height) {
    return length*width*height    
}
const volumeOfRectPrism_A = (length,width,height) => {
    return length*width*height
}

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
    return Math.PI*radius*radius    
}
const areaOfCircle_A = (radius) => {
    return Math.PI*radius*radius
}

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
    return 2*Math.PI*radius    
}
const circumOfCircle_A = (radius) => {
    return 2*Math.PI*radius
}

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass,volume) {
    return mass/volume
}
const density_A = (mass,volume) => {
    return mass/volume
}

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance,time) {
    return distance/time
}
const speed_A = (distance,time) => {
    return distance,time
}

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity = 9.81) {
    return mass*gravity    
}
const weight_A = (mass, gravity=9.81) => {
    return mass*gravity
}

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(Temperature) {
    return (Temperature*9/5)+32
}

/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
   Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
   Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */
function bmi(weight,height) {
    let BMI = weight / (height*height)
    switch (true){
        case (BMI < 18.5):
            console.log(`Your BMI is ${BMI} and you are Underweight.`)
            break
        case (BMI < 24.9):
            console.log(`Your BMI is ${BMI} and you are Normal weight.`)
            break
        case (BMI < 29.9):
            console.log(`Your BMI is ${BMI} and you are Overweight.`)
            break
        case (BMI > 30):
            console.log(`Your BMI is ${BMI} and you are Obese.`)
            break
    }
}

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    switch (true) {
        case month.search(/Sep|Oct|Nov/gmi) != -1:
            alert('The season is Autumn.')
            break;
        case month.search(/Dec|Jan|Feb/gmi) != -1:
            alert('The season is Winter.')
            break;
        case month.search(/Mar|Apr|May/gmi) != -1:
            alert('The season is Srping.')
            break;
        case month.search(/Jun|Jul|Aug/gmi) != -1:
            alert('The season is Summer')
            break;
    }
}

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
/*
console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/
function findMax(num1,num2,num3) {
    return Math.max(num1,num2,num3)
}