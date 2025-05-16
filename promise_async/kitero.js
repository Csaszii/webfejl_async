function buyApple1(num){
    if (num < 5){
        return Promise.resolve("Van " + num + " almánk")
    }
    else{
        return Promise.reject("Nincs " + num + " almánk")
    }
}

const alma = buyApple1(3);
console.log(alma);

alma.then(value => {
    console.log(value)
});

console.log(alma);

buyApple1(6).catch(error => {
    console.log(error);
});

buyApple1(3).then(value => {
    console.log(value)
}).catch(error => {
    console.log(error);
});

function buyApple2(num){
    return new Promise((resolve, reject) => {
        if (num < 5){       
            resolve("Van " + num + " alma")
        }
        else {
            reject("Nincs " + num + " almánk")
        }
    });
}

buyApple2(3).then(value => {
    console.log(alma)
}).catch(error => {
    console.log(error)
});

function buyApple3(num){
    return new Promise((resolve, reject) => {
        if (num < 5){       
            setTimeout(() => {resolve("Van " + num + " alma")}, 1000)
        }
        else {
            setTimeout(() => {reject("Nincs " + num + " almánk")}, 1000)
        }
    });
}