// 注：也可以将 <script> 放在 body 中，但要放在底部。这是因为浏览器会按照代码在文件中的顺序解析 HTML。如果先加载的 JavaScript 期望修改其下方的 HTML，那么它可能由于 HTML 尚未被加载而失效。所以，要将 JavaScript 代码放在 body 中，应置于 HTML 页面底部。
// 译注：本文中的 <script> 若置于 head 中，必须指明 async，而置于 body 中则无需指明。

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello lit!';

let iceCream = 'chocolate';
if (iceCream === 'chocolate'){
    alert('this is a test')
} else{
    alert('also a test')
}

// 自定义函数
function mul(num1, num2){
    let result = num1 + num2;
    alert('result is :' + result)
    return result
}

// mul(2,3)

document.querySelector('li').onclick = function(){
    alert("touch me")
}

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/yang.jpg'){
        myImage.setAttribute('src', 'image/fish.jpg')
    }
    else{
        myImage.setAttribute('src', 'image/yang.jpg')
    }
}


function setHeading(name){
    let myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello ' + name
}

function setUserName(){
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;

