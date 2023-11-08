function hello(time){
    console.log(`Hello ...called in ${time}ms`)
}

function debounce(calls, t) {
    output = []
    calls.forEach(call => {
        timeout = setTimeout(() => {
            hello(call.t)
        }, call.t)
        
        if (call.t <= t) {
            clearTimeout(timeout)
        } else {
            call.t += t
            output.push(call)
        }
    })
    return output
}

const calls = [
    {"t":  50, inputs: [1]},
    {"t": 75, inputs: [2]}
]

console.log(debounce(calls, 50))