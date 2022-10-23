// const arr = [1, [2, [3, [4, 5]]]]
// console.log(arr.flat(3))
// let arr3 = []

// arr.forEach(element => {element = element.concat(arr2(element))})

// console.log(arr)

// function arr2(element) {
//     if (element !== Object){return element}
// }

const arr = [1, 2, null, 7, 8, null, 3]
let arrDouble = []
for (let item of arr) {
    if (typeof item === "number") {
        arrDouble = arrDouble.concat(item*2)  
    }
}
console.log(arrDouble)