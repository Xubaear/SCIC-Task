function factorialNumber (number){
    let result = 1

    for (let x = number;
        x >= 1;
        x--
    ){
        result = result * x
    }
    return result
}
console.log(factorialNumber(5))