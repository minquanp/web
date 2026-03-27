console.log('test data')
const fetchBlog = async () => {
    const res = await fetch('http://localhost:8000/blogs');
    const data = await res.json();
    const tbody = document.querySelector('#blogs tbody');

    if (data && data.length) {
        data.forEach((blog, index) => {
            tbody.innerHTML += `

            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                <button class="delete-blog"
                    data-id="${blog.id}"
                    > 
                    xoa</button>
                </td>
            </tr>
            `
        }
        )
    }
}
const addNewRowToEnd = (blog) => {
    const tableBody = document.querySelector('#blogs tbody');

    // Tạo phần tử dòng mới
    const newRow = document.createElement('tr');

    // Gán HTML cho dòng
    newRow.innerHTML = `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                    <button class="delete-blog"
                    data-id="${blog.id}"
                    > 
                    xoa</button>
                </td>
            </tr>
    `;

    // Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow);
}
const addnewblog = () => {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const content = document.getElementById("content");
    const saveblogBt = document.getElementById("saveBlog")
    saveblogBt.addEventListener("click", async () => {
        console.log(title.value, author.value, content.value);
        //// calll API
        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value,
            })
        });
        const data = await rawResponse.json();
        console.log("check API", data)
        addNewRowToEnd(data);
    })
}
const handleDeleteBtns = () => {
    const btns = document.querySelectorAll(".delete-blog");
    if (btns) {
        btns.forEach((btn, index) => {
            btn.addEventListener("click", async () => {
                const id = btn.getAttribute("data-id");
                ///delete blog
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DElETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                const data = await rawResponse.json();
            });
        })

    }
}
document.querySelector('#blogs tbody').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-blog')) {
        const id = e.target.getAttribute('data-id');
        handleDeleteBtns(id);
    }
});

fetchBlog().then(() => {
    handleDeleteBtns();
});
addnewblog();


