

function doubleAfter2Seconds(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x < 2) {
                reject("Expected 2 or higher than 2");
            }
            resolve(x * 2);
        }, 2000)
    }).then(result => {
        console.log(`We have it done! ${result}. But it took a second longer`);
    })
}

const tripleAfter1Second = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x < 3) {
                reject("Expected 3 or higher than 3");
            }
            resolve(x * 3);
        }, 1000)
    }).then(result => {
        console.log(`We have it trippled. Result is ${result}`);
    })
}

// IIFE - Immediately Invoked Function Expression
(async (x) => {
    const result = await new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 4);
        }, 3000);
    })
    console.log(`3 seconds to get ${result}`);
})(10);

console.log(doubleAfter2Seconds(2));
console.log(tripleAfter1Second(4));




