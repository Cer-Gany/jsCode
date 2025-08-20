// const tinderUser = new Object()
// console.log(tinderUser);

const tinderUser = {};
tinderUser.id = "abc123";
tinderUser.name = "harsh";
tinderUser.isLogedIn = false;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('id'));


const regularUser = {
    mail : "Anyone@gmail.com",
    Name : {
        userName : {
            userfullName : {
                firstName : "Gany",
                lastName : "Dhage"
            }
        }
    },
    password : "47298364"
}
// console.log(regularUser.Name.userName?.userfullName.firstName);

// obj concatinatation

const obj1 = {
    1 : "A",
    2 : "B"
}
const obj2 = {
    3 : "A",
    4 : "B"
}
const obj3 = {
    5 : "A",
    6 : "B"
}

// const objres = Object.assign({}, obj1, obj2, obj3)
// console.log(objres);

// const objres2 = {...obj1, ...obj2, ...obj3}
// console.log(objres2);

const user = [
    {
        name : "GANN",
        location : "Pune"
    },
    {
        name : "mani",
        location : "jalna"
    },
    {
        name : "vaishi",
        location : "palaskeda"
    }
]
// console.log(user[0].name);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Object de-structure

const course = {
    courseName : "js",
    courseFees : "999",
    courseInstructore : "Hitesh"
}
// console.log(course);

//1st way
// const {courseInstructore} = course
// console.log(courseInstructore);

// //2nd way
// const {courseInstructore : teacher} = course
// console.log(teacher);



// JSON API 
