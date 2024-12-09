function checkPrime(array) {
    if (array <= 1) 
        return false; 
    for (let i = 2; i < array; i++) {
        if (array % i == 0) 
        return false;
    }
         return true;
}
function filterPrimes(numbers) {
    return numbers.filter(checkPrime);
}
const arrayNum = [2,5,6,7,8,11,23,45,60,29,56];
const primeArrays = filterPrimes(arrayNum);
console.log(primeArrays); 