
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
resize();

function resize(){
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

var pos={x:0, y:0};

function setposition(e){
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e){
  if (e.buttons !==1) return;
  var color = document.getElementById("hex").value;
  ctx.beginPath();
  ctx.lineWidth = 15;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;

  ctx.moveTo(pos.x, pos.y-80);
  setposition(e);
  ctx.lineTo(pos.x, pos.y-80)

  ctx.stroke();
}


window.addEventListener("resize",resize)
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setposition);
document.addEventListener("mouseenter", setposition);
