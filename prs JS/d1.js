// console.log(typeof "Hello, World!")
// const name = {
//     name: ` quan`,
//     age: ` 25`,
//     location: ` vn`
// }
// console.log(`my in4`, name)
/// arra

// console.log(age)
// console.log("%cwarning !", "color: red; font-weight:bold; font-size: 20px;");


// for (let i = 0; i < age.length; i++) {
//     console.log(age[i - 1])
// }
// let sum = (a, b) => {
//     return a + b;
// }
// console.log((sum(5, 10)));
// age.forEach((value, index) => {
//     console.log(value, index);
// });
// const age = [1, 2, 3, 4, 5, 6]
// const agex2 = age.map((value, index) => {
//     return value * 2;
// });
// console.log(agex2);
// const agefilter = age.filter((value, index) => {
//     return value > 3;
// });
// console.log(agefilter);
// const sv1 = {
//     username: `quan`,
//     age: 25,
//     location: `vn`
// }
// const sv2 = {
//     username: `quang`,
//     age: 26,
//     location: `vn`
// }
// const sinhvien = [sv1, sv2,];
// sinhvien.forEach((item, index) => {
//     console.log("ten sv", item.username)
// });
// console.log
// for (let key in sv1) {
//     console.log(key, sv1[key])
// }
// for (let value of Object.values(sv1)) {
//     console.log(value)
// }
// const element = document.getElementById('username');

const div = document.querySelector('.username');
console.log(div)
const bt = document.getElementById('myBtn');
console.log(bt)
function handleclick() {
    alert("you click me")
    console.log("you click me right ?")
}