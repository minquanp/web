// alert(" hello word from javacript");
console.log("xin chao tu ")
console.log("xin chao Quan ")
let a = `i'm a singer`
let text = ` we are "venom"
xin chao mn nhe`
console.log(a)
console.log(text)
x = a.slice(6, 12)
console.log(x)


let b = 5
let f = 10
let c = "10"
let d = +c;


console.log(`b value: `, typeof b, ` d value: `, typeof d, `f value:`, typeof f)
console.log(b + d + f)
console.log(b == f)

console.log(`fifteen is ${b + f} and 
    not ${2 * b + f}`)
let g = {
    name: ` quan`,
    location: ` tphcm`,
    email: `minhquanst120@gmail.com`
}
g.name = `jacky`

console.log('what is your name? ', `my name is :`, g.name, g)

let h = [` mu`, `chelsea`, `man xanh`, 'chelsea', `lvpools`]
for (let i = 0; i < h.length; i++) {
    if (h[i] === `chelsea`) {
        console.log(`team win:`, h[i])
        continue;
    }
    console.log(`check i:`, i)

}
function sum(m, k) {
    return m * k
}
console.log(`sum a*b`, sum(7, 10))
let sum = (m, k) => {
    return m + k;
}
console.log(`check sum`, sum(6, 5))
