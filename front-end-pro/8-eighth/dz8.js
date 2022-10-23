function createCalculator(base) {
    const set = base
    return {
        add: (item) => {
            if (isFinite(item)) {
                base += item
            }
        },
        sub: (item) => {
            if (isFinite(item)) {
                base -= item
            }
        },
        set: (item) => {
            base = item
        },
        get: () => {
            return base
        },
        reset: () => {
            return base = set
        }
    }
}

const calculator = createCalculator(100);

calculator.add(10); // 110 - это текущее значение base
console.log(calculator.add(10)); // undefined
calculator.sub(20);
calculator.set(20);
calculator.add(10);
calculator.add(10);
calculator.add('qwe'); // NaN и значение 40 не менять

console.log(calculator.get()) // 40
console.log(calculator.reset()) // 100
