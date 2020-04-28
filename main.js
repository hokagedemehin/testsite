// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello Demehin!!';

// document.querySelector('html').onclick = function(){
//     alert('Ouch!, you clicked me');
// }

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lion.jpg'){
        myImage.setAttribute('src','images/lamb.jpg');
    } else {
        myImage.setAttribute('src', 'images/lion.jpg');
    }
}

    myButton = document.querySelector('button')
    myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name: ');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'test site from firefox ' + myName
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'test site from firefox, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    storedName = localStorage.getItem('name');
    myHeading.textContent = 'test site from firefox, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

let list = document.createElement('ul');
let info = document.createElement('p');
let html = document.createElement('html');

info.textContent = "below is a dynamic list. CLick anywhere outside the list to add an item. Also click an existing item to change its content";

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function () {
    let listitem = document.createElement('li');
    let listContent = prompt("WHat content do you want to add");
    listitem.textContent = listContent;
    list.appendChild(listitem);

    listitem.onclick = function (param) {
        param.stopPropagation();
        let listContent = prompt("Enter new content for this list selected");
        this.textContent = listContent;
    }
}