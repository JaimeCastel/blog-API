const API_URL ="http://localhost:3000"

const HTMLResponse = document.querySelector("#container");
const ul = document.createElement('ul');


fetch(`${API_URL}/posts`)
    .then((response) => response.json())
    .then ((posts) => {
        posts.forEach((post) => {
        let elem = document.createElement("li");
        elem.appendChild(
            document.createTextNode(`${post.title}`)
        );
        ul.appendChild(elem);
    });

    HTMLResponse.appendChild(ul);
    });
