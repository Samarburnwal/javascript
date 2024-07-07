const tinderUser = new Object()
// const tinderUser = {}

tinderUser.name = "Sam"
tinderUser.id = "123wwe"
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "User@gmail.com",
    fullName: {
        userFullName:{
            firstname: "samar",
            lastname: "burnwal"
        }
    }
}

// console.log(regularUser.fullName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj4 = {obj1,obj2,obj3} //Nested objects
//const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4)

const user = [
    {
        id: 1,
        email:"s@gmail.com"
    },
    {
        id:2,
        email:"x@gmail.com"
    },
    {
        id:3,
        email:"sd@gmail.com"
    }
]

// console.log(Object.keys(tinderUser)) //gives array
// console.log(Object.entries(tinderUser)) //converts all the key pair values in array of array form

// console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    courseName: "JS_In_Hindi",
    courseInstructor: "Hitesh Choudhary",
    price: "000"
}

console.log(course.courseInstructor) //We are trying to access the value of courseInstructor from the object course

//One more way of doing this is by destructuring the object'

const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor:Instructor} = course //by using the semicolon we can allot a new name for the courseInstructor as only Instructor

// {
//     "name":"samar",
//     "isLoggedIn":"false",
//     "userId":"samixel"
// }  it is a format of an api,json objects

// [
//     {},
//     {},
//     {}
// ] //sometimes we get api's or json as an array of objects and by using loops we can access them individually