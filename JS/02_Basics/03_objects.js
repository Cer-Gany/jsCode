// singletone
// Object.create

// 1 litral

const mysym = Symbol("key1")
const jsUser = {
    Name : "GANY",
    lastName : "Dhage",
    "full name" : "g s dhage",
    [mysym] : "mySymkey1",
    age : 20,
    mail : "mi@gamil.com",
    location : "Pune",
    isLogedin : false,
    lastLoginDay : ["moonday", "sunday"]
}
// console.log(jsUser.lastName);
// console.log(jsUser["Name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

// jsUser.mail = "Gany@gany.com"
// console.log(jsUser);
// Object.freeze(jsUser)
// jsUser.mail = "many@gany.com"
// console.log(jsUser);


jsUser.gretting = function() {
    console.log("Hello Mr.");
    
}
console.log(jsUser.gretting());

jsUser.grettingTwo = function() {
    console.log(`Hello Mr. ${this.Name}`);
}
console.log(jsUser.grettingTwo());



