function hello(time){
    console.log(`Hello ...called in ${time}ms`)
}

function debounce(calls, t) {
    output = []
    for (let i = 0; i < calls.length; i++){

        timeout = setTimeout(() => {
            hello(calls[i].t)
        }, calls[i].t + t)

        if (!calls[i+1]) {
            calls[i].t += t
            output.push(calls[i])
            return output
        }

        if ((calls[i+1].t - calls[i].t < t)) {
            clearTimeout(timeout)
        }
        else {
            calls[i].t += t
            output.push(calls[i])
        }
    }
    return output
}

let calls = [
    {"t": 50, inputs: [1, 2]},
    {"t": 300, inputs: [3, 4]},
    {"t": 300, inputs: [5, 6]}
]

let t = 150
console.log(debounce(calls, t))

calls = [
    {"t": 50, inputs: [1]},
    {"t": 100, inputs: [2]}
  ]
  
 t = 20
console.log(debounce(calls, t))

calls = [
    {"t": 50, inputs: [1]},
    {"t": 75, inputs: [2]}
  ]
  

t = 50
console.log(debounce(calls, t))