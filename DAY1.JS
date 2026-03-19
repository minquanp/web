// // alert(" hello word from javacript");
// console.log("xin chao tu ")
// console.log("xin chao Quan ")
// let a = `i'm a singer`
// let text = ` we are "venom"
// xin chao mn nhe`
// console.log(a)
// console.log(text)
// x = a.slice(6, 12)
// console.log(x)


// let b = 5
// let f = 10
// let c = "10"
// let d = +c;


// console.log(`b value: `, typeof b, ` d value: `, typeof d, `f value:`, typeof f)
// console.log(b + d + f)
// console.log(b == f)

// console.log(`fifteen is ${b + f} and
//     not ${2 * b + f}`)
// let g = {
//     name: ` quan`,
//     location: ` tphcm`,
//     email: `minhquanst120@gmail.com`
// }
// g.name = `jacky`

// console.log('what is your name? ', `my name is :`, g.name, g)

// let h = [` mu`, `chelsea`, `man xanh`, 'chelsea', `lvpools`]
// for (let i = 0; i < h.length; i++) {
//     if (h[i] === `chelsea`) {
//         console.log(`team win:`, h[i])
//         continue;
//     }
//     console.log(`check i:`, i)

// }
// // function sum(m, k) {
// //     return m * k
// // }
// // console.log(`sum a*b`, sum(7, 10))
// let kk = (m, k, callback) => {
//     let tong = m + k;
//     callback(tong);
// }
// let quankk = (ssage) => {
//     console.log(`sum a + b =`, ssage)
// }
// kk(7, 15, quankk)


// let obj = {
//     name: `quan`,
//     location1: `tphcmn`,
//     getlocation: function () {
//         return this.location1;
//     }
// }
// console.log(` ten toi la : `, obj.getlocation())
// let arr = [
//     { name: `erik`, age: 25 },
//     { name: `quan`, age: 25 },
//     { name: `jacky`, age: 30 },
//     { name: `minh`, age: 26 },
//     { name: `min`, age: 26 },
// ]
// // filter,find
// let filter = arr.filter((item, index) => {
//     console.log(`>>>. check filter : item`, item, `index`, index)
//     return item && item.age === 25;
// });
// console.log(filter)

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // for (let i = 0; i < arr1.length; i++) {
// //     arr1[i] = arr1[i] * arr1[i];

// // }
// let map = arr1.map((item, index) => {
//     item = item * item;
//     return item;
// });
// // console.log(`check value arr1:`, arr1)
// console.log(`check value map:`, map)


// let ten = [
//     { name: `erik`, age: 25 },
//     { name: `quan`, age: 26 },
//     { name: `jacky`, age: 30 },
//     { name: `minh`, age: 23 },
//     { name: `min`, age: 62 },
// ]
// ten.sort((a, b) => {
//     return a.age - b.age - c.age;
// });
// console.log(` thu tu : `, ten)