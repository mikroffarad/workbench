let a = 1;
let b = '123123123123';

function sum() {
    if (arguments.length == 2) {
        if (typeof(a) === "number" && typeof(b) === "number") {
            return a+b;    
        } else {
            throw new Error("There's should be only numbers");
        }
        
    } else {
        throw new Error("invalid number of arguments");
    }
}

console.log(sum("1", 2));