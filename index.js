//Your code goes here

// 1. Click the button to display your name
function displayName(){
  document.getElementById("myName").value = "Mehthara";
}


//2. Switch lights on mouseover
function changeImage(){
  document.getElementById("imageOff").src = "images/lighton.png";
}

function changeToOriginal(){
  document.getElementById("imageOff").src =  "images/lightoff.png";
}


//3. Double click to display content
function displayImage(){
  document.getElementById("displayPara").innerHTML = `<img src="images/smileyface.png" alt="smiling face" />`;
}


// 4. Traffic Lights
function red(){
  document.getElementById("stopDiv").style.background = "red";
  document.getElementById("readyDiv").style.background = "black";
  document.getElementById("goDiv").style.background = "black";
}
function green(){
  document.getElementById("stopDiv").style.background = "black";
  document.getElementById("readyDiv").style.background = "black";
  document.getElementById("goDiv").style.background = "green";
}
function yellow(){
  document.getElementById("stopDiv").style.background = "black";
  document.getElementById("readyDiv").style.background = "yellow";
  document.getElementById("goDiv").style.background = "black";
}


//5. Change textbox border colours
function changeBorder(){
  document.getElementById("firstName").style.borderColor = "red";
  document.getElementById("lastName").style.borderColor = "green";
}

//6. validate the box [length should be more than 8 characters]
function validate(){
  let inputValue = document.getElementById("myName2").value;
  if(inputValue == ""){
    document.getElementById("errMsg").style.color = "red";
    document.getElementById("errMsg").innerHTML = `Please input a string`;
  }
  else if(inputValue.length <8){
    document.getElementById("errMsg").style.color = "red";
    document.getElementById("errMsg").innerHTML = `string should be 8 chars long`;
  }
  else{
    document.getElementById("errMsg").style.color = "green";
    document.getElementById("errMsg").innerHTML = `success`
  }
}



// 7.create a list of hobbies
function displayPrompt(){
  let hobby1 = prompt("Please enter a hobby");
  let hobby2 = prompt("Please enter a hobby");
  let hobby3 = prompt("Please enter a hobby");
  document.getElementById("hobbies").innerHTML = `<li>${hobby1}</li>
  <li>${hobby2}</li><li>${hobby3}</li>`;
}



// 8. Display a profile card from an object
function displayCard(){
  document.getElementById("displayCard").innerHTML = `<img src="images/face.jpg" alt="card face" />
  <h6>Mehthara</h6><p>Reading, Writing</p>`
}