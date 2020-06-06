function newItem() {
    console.log("Inside newItem");
    var item = document.getElementById("input").value;
    console.log(item);
    
    var ul = document.getElementById("list");
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item));   
    ul.appendChild(li);  
    
    document.getElementById("input").value = "";  
    
    li.onclick = removeItem;  
}

document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    console.log("enter clicked!");
    newItem();
  }
};

function removeItem(e) {
  
  var done = document.getElementById("list2");
  var li = document.createElement("li");
    li.appendChild(document.createTextNode( e.target.innerHTML));   
    done.appendChild(li);  
  e.target.remove(); 
  li.onclick = removeItem2;  
}

function removeItem2(e) {
  e.target.remove(); 
}

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

