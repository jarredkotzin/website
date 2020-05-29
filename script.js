

document.addEventListener('keyup', spacebar);

function spacebar(e) {
  if(e.keyCode == 32) {
    console.log("space clicked");
    document.body.style.backgroundColor = "orange"; 
  }
  console.log(e.keyCode);
}