let fullname = `quan`;
let birthday = `1550`;
let student = true;
const today = new Date();
const currrentYear = today.getFullYear();
const age = currrentYear - birthday;
if (age <= 22) {
    console.log(` my name is ${fullname}, i am ${age} years old, student: ${student}`);
} else {
    console.log(` my name is ${fullname}, i am ${age} years old, student: ${student = false}`);
}