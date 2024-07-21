const chatInput = document.querySelector(".chat-input textarea");
const sendchatBtn = document.querySelector(".chat-input span");
const chat = document.querySelector(".chatbox");

let usermessage;
const API_KEY="sk-proj-Rr2oZslVhnPZbIvijz1zT3BlbkFJN2Rpyk40NdlZXWs85iWV";
const createChatLi = (message, className) => {
    //creat a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent = className === "outgoing" ? '<p>$ {message}</p>:<p>$ {message}</p>':'<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>';
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = () =>{
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatli.querySelector("p");
    const requestOptions = {
        method:"post",
        Headers:{
            "content-type":"application/json",
            "Authorization":'Bearer ${APP_KEY}'
        },
       body: JSON.stringify({
        model :"gpt-3.5-turbo",
        message :[{role :"user",content ,usermessage}]
       })
    }

    //send post request to api response
    fetch(API_URL,requestOptions).then(res => res.json()).then(data =>{
        console.log(data);
    }).catch(()=> {
        console.log(console.log(error));
    })
}

const handlechat =()=>{
    usermessage = chatInput .value.trim();
    console.log(usermessage);
    if(!usermessage) return;
    setTimeout(() => {
        //display "thinking...." message while for the response
        chatbox.createChatLi(usermessage,"incoming") ;
    },600);
}
sendchatBtn.addEventListener("click",handlechat);