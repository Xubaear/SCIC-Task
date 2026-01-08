function evenNumbers (array){
    return array.filter(number => number % 2===0 )
}

const numbers = [1,2,3,4,5,6]
console.log(evenNumbers(numbers))