function fun(n) {
    let array = []
    let seive = []

    for (let num = 2; array.length < n; num++) {
        if (!seive[num]) {
            array.push(num);
            for (let num1 = num; num1 <= n ** 2; num1 += num) {
                seive[num1] = true;
            }
        }
    }
    console.log(seive)
    return array
}

console.log(fun(process.argv[2]))