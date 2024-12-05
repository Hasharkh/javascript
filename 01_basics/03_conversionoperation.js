let num = "33"
console.log(typeof(num))
let valueinNumber = Number(num)
console.log(typeof valueinNumber);

// "33" => 33
// "33abs" => nan
// true => 1
// false => 0
let isLoggedIn = 1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// isLoggedIn = 1  Boolean(isLoggedIn)  ==> true
// isLoggedIn = ""  Boolean(isLoggedIn)  ==> false
// isLoggedIn = "hashar"  Boolean(isLoggedIn)  ==> true
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
//                                operations
console.log("--------------------------------------------------------------------------------------------------------------------------------");

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+"1"+"2");
console.log(1+1+"2");

console.log("---------------------------------------------------------------------------------------------");
let x =5
let a=5
let y = x++
let z= ++a

console.table([y,z])
