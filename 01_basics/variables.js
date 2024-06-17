const accountId = 123421
let accountEmail = "samar@google.com"
var accountPassword = "9812"
accountCity = "Dholakpur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "samixel@sam.com"
accountPassword = "21390132"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])