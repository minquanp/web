const product = [
    {
        name: ` iphone`,
        price: 1000,
        color: `black`,
        instock: true,
    },
    {
        name: ` samsung`,
        price: 800,
        color: `white`,
        instock: false,
    },
    {
        name: ` xiaomi`,
        price: 500,
        color: `red`,
        instock: true,
    },
    {
        name: ` oppo`,
        price: 600,
        color: `blue`,
        instock: true,
    },
    {
        name: ` vivo`,
        price: 700,
        color: `green`,
        instock: false,
    }
]
console.log(product[0].name)
product[2].price = 150;
console.log(`cac san pham`, product)
product.push({
    name: `quan xi`,
    price: 500,
    color: `yellow`,
    instock: true,
})
console.log(`cac san pham`, product)
product.pop();
console.log(`cac san pham`, product)
product.forEach((item, index) => {
    console.log(`ten san pham`, item.name)
})
product.map((item, index) => {
    console.log(Array(item.name))
})
const hangcon = product.filter((item, index) => {
    return item.instock === true;
})
console.log(`san pham con hang`, hangcon)
for (let value of Object.values(product[0])) {
    console.log(value)
}