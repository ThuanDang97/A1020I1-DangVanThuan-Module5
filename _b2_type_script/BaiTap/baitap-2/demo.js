var a;
a = 10;
console.log(a);
for (var i = 0; i < 10; i++) {
    var j = 5;
    if (i < j) {
        console.log(i);
    }
}
var money = 10000;
var buyCar = function (car) {
    // @ts-ignore
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 3000);
    });
};
money = 1000;
var promise = buyCar("Honda").then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
