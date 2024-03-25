// Create an empty object called dog
let dog = {}

// Print the the dog object on the console
console.log(dog)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Sebasthian'
dog.legs = 4
dog.color = 'black'
dog.bark = function() {
    return 'woof woof'
}

// Get name, legs, color, age and bark value from the dog object
const values = Object.values(dog)

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Alaskan'
dog.getDocInfo = function() {
    console.log(`The dog name is ${this.name}. He is a ${this.color} ${this.breed}.`)
}