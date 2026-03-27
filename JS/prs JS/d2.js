// const doSomething = () => {
//     const a = 10, b = 3;
//     if (b === 0) {
//         throw new Error(" thuc hien chia cho 0");
//     }
//     return a / b;
// }

// try {
//     doSomething()
// }
// catch (error) {
//     console.log("co loi roi ", error)
// } finally {
//     console.log("run final")
// }
// fetch('http://localhost:8000/users')
//     .then(respone => respone.json())
//     .then(data => console.log(`data ne`, data))
/// async await
// const bang = document.getElementById("bang");
const fetchData = async () => {
    const res = await fetch('http://localhost:8000/users');
    const data = await res.json();
    console.log('check', data)
    const tbody = document.querySelector('#users');
    if (data && data.length) {
        data.forEach((user, index) => {
            tbody.innerHTML += `
            <tr>
                <td> ${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
    `
        })
    }
}
fetchData()
