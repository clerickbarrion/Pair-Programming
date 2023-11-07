function transform(arr,fn) {
    return fn(arr)
}

arr = [1,2,3]

// adds 1 to each number
let fn = arr => {
    for(let i = 0; i <arr.length; i++){
        arr[i]++
    }
    return arr
}

let newArray = transform(arr, fn)
console.log(newArray)