function isPalindrome(string){
    const reverseSame = string.split('').reverse('').join('')

    if (string === reverseSame){
        return true
    }else{
        return false
    }
}

console.log(isPalindrome('madam'))
console.log(isPalindrome ('hello'))