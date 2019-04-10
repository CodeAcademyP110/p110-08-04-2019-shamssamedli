"user strict"
const mainChat = document.querySelector('.main-chat');
const startChat = document.querySelector('.start-chat');
const userInput = document.querySelector('.input');
const question = document.querySelector('.question');
const trashBtn = document.querySelector('.trash');

startChat.onclick = function (){
    mainChat.classList.toggle("show");
    window.scrollTo(0, 0);
}

userInput.onkeydown = function(e){
    if (e.keyCode == 13){
            let div = document.createElement('div');
            let img = document.createElement('img');
            let p = document.createElement('p');

            if(userInput.value[0] == userInput.value[0].toUpperCase()){
                div.classList.add('left');
                img.src = 'images/call.jpg';
            }
            else{
                div.classList.add('right');
                img.src = 'images/user1.jpg';
            }

            p.innerText = userInput.value;
            div.appendChild(img);
            div.appendChild(p);
            question.appendChild(div);
            userInput.value = "";

            div.onclick = function(){
                this.classList.toggle('selectedRow');
                trashBtn.classList.add('show');
            }


    }
}

trashBtn.onclick=function(){
    let selectedRows = document.querySelectorAll('.selectedRow');
    selectedRows.forEach(function(element){
       element.remove();
    });
    trashBtn.classList.remove('show');
}
