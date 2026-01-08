function sumOfArray (array){
    let sum =0
    for (let number of array){
        sum = sum+ number
    }
    return sum
}

const total = [1,2,3,4]
console.log(sumOfArray(total))