
let a : number;
a = 10;
console.log(a);

for (let i : number = 0; i < 10; i++){
    let j : number = 5;
    if (i < j){
        console.log(i);
    }
}


let money = 10000;
const buyCar = (car: any) => {
    // @ts-ignore
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("Can buy " + car);
            } else {
                reject("Do not enough money");
            }
        }, 3000);
    })
}

money = 1000;
const promise = buyCar("Honda").then(value => {
    console.log(value);
}, error => {
    console.log(error);
})

