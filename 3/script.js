function hello(time) {
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
            output
        }
        // else if (call.t === t) {
        //     output.pop(call)
        // }

        else {
            call.t += t
            output.push(call)
        }
    })
    return output
}

let calls = [
    { "t": 50, inputs: [1, 2] },
    { "t": 300, inputs: [3, 4] },
    { "t": 300, inputs: [5, 6] }

]

console.log(debounce(calls, 150))


// function debounce(calls, t) {
//     output = [];
//     for (let t = 0; t < output.length; t++) {
//         if (t <= output.length) {
//             calls[t];
//         }

//         return `${[t]}`
//     }

// }

// calls = [
//     { "t": 50, inputs: [1, 2] },
//     { "t": 300, inputs: [3, 4] },
//     { "t": 300, inputs: [5, 6] }

// ]

// console.log(debounce(calls, 150));