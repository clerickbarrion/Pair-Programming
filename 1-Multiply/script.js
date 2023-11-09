function createMultiplyer(input){
    return function multiplyer (input1){
    return input1 * input
    }

};
const multiplyBy5 = createMultiplyer(5)
console.log(multiplyBy5(10))
console.log(multiplyBy5(7))