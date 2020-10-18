
const sum = (a, b) => {
    let sum = a + b;
    return sum
}

const sub = (a, b) => {
    let sub = a - b;
    return sub
}

const mul = (a, b) => {
    let mul = a * b;
    return mul
}

const divi = (a, b) => {
    let divi = a / b;
    divi = divi.toFixed(2)
    return divi
}


export { sum, sub, mul, divi }
