function removeDupli (array){
    return [...new Set(array)]
}

const numbers =[1, 2, 2, 3, 4, 4]
console.log(removeDupli(numbers))