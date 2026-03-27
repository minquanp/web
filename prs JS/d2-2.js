
const inputtodo = document.getElementById('todo')
const savebtn = document.getElementById('btn')
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
savebtn.addEventListener('click', () => {
    const mytodo = {
        id: getRandomInt(1, 1000000),
        name: inputtodo.value
    }
    const currrenttodoStr = localStorage.getItem('todo');
    console.log('check to do str', currrenttodoStr)
    if (currrenttodoStr) {
        const currentodo = JSON.parse(currrenttodoStr)

        currentodo.push(mytodo)
        localStorage.setItem("todo", JSON.stringify(currentodo))

    }
    else {
        localStorage.setItem("todo", JSON.stringify([mytodo]))
    }
    todotable();
})

const todotable = () => {
    const tbody = document.querySelector('#todolist');
    const todolistStr = localStorage.getItem("todo");

    tbody.innerHTML = '';
    if (todolistStr) {
        const todolist = JSON.parse(todolistStr);


        if (todolist && todolist.length) {
            todolist.forEach((inputtodo, index) => {
                tbody.innerHTML += `
            <tr>
                <td> ${inputtodo.id}</td>
                <td>${inputtodo.name}</td>
                <td><button data-id=${inputtodo.id} 
                class='btn-delete'>xoa</button></td>
            </tr>
    `
            })
        }
    }
}
todotable();
document.querySelector('#todolist').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const id = e.target.getAttribute('data-id');
        deleteTodo(id);
    }
});

const deleteTodo = (id) => {
    const todolistStr = localStorage.getItem("todo");
    if (todolistStr) {
        const todolist = JSON.parse(todolistStr);
        // Filter out the item (ensure ID types match, or use !=)
        const newTodo = todolist.filter(todo => todo.id + "" !== id);
        localStorage.setItem("todo", JSON.stringify(newTodo));

        // Refresh the table UI without reloading the whole page
        todotable();
    }
}