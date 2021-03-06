const URL = "http://localhost:8080/session";
const PING_INTERVAL = 2000;

setInterval(function (){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL);
    xhr.responseType = "json";
    xhr.onload = () => {
        console.info(xhr.response);
        const data = xhr.response.data;
        const chatBody = document.querySelector(".chat");
        data.length > 0 ?
            data.forEach(item =>
            {
                const div = document.createElement("div");
                div.innerHTML =`<b>${item.username}:</b><span> ${item.message}</span>`;
                chatBody.append(div);
             }) : null;
    };
    xhr.onerror = () => {
        console.info(xhr.response);
    };
    xhr.send();
},PING_INTERVAL);
