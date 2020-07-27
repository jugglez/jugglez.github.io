let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yt_1200.png') {
      myImage.setAttribute ('src','images/unnamed.png');
    } else {
      myImage.setAttribute ('src','images/yt_1200.png');
    }
}

let myButton = document.querySelector('button.user');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome, ' + myName;
      }
}
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }