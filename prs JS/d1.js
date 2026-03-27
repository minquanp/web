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

// const div = document.querySelector('.username');
// console.log(div)
// const bt = document.getElementById('myBtn');
// console.log(bt)
// function handleclick() {
//     alert("you click me")
//     console.log("you click me right ?")
// const button = document.getElementById('bt');
// const test = document.getElementById('test');
// const backButton = document.getElementById('btk');
// button.addEventListener('click', () => {
//     test.textContent = "you click me"
//     test.style.color = 'red';
//     test.style.backgroundColor = 'yellow';
//     test.classList.add('active');
// });
// backButton.addEventListener('click', () => {
//     test.textContent = "Welcom to my world"
//     test.style.color = 'black';
//     test.style.backgroundColor = 'lightgray';
//     test.classList.remove('active');
// });
// const button = document.getElementById('login');
// button.addEventListener('click', () => {
//     alert("access login")
//     console.log("you click me right ?")
// })
const user = document.getElementById('username');
const pass = document.getElementById('password');
const button = document.getElementById('submit');
button.addEventListener('click', () => {
    const username = user.value;
    const password = pass.value;
    if (username === "admin" && password === "123456") {
        alert("access login");
        window.location.href = "success.html";
    } else {
        alert("login fail")
        user.style.borderColor = 'red';
    }
})
