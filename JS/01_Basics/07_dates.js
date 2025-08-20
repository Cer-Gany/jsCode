let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);
// console.log(myDate.getTimezoneOffset());
 

// const itDate = new Date(2023, 0, 23, 5, 3)
// console.log(itDate.toDateString());

// const itDate = new Date(2023, 0, 23, 5, 3, 22)
// console.log(itDate.toLocaleString());

const itDate = new Date("2-01-2025")
// console.log(itDate.toDateString());


let timeStamp = Date.now()
// console.log(timeStamp); 
// console.log(itDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getHours());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday : "long",
})





 