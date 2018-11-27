var canvas;
var context;

$(function(){
  console.log('init fired');
  canvas = $('#canvas')[0];
  context = canvas.getContext('2d');
  canvas.width = window.innerWidth*0.7;
  canvas.height = window.innerHeight*0.95;

  window.onresize = function(){
		canvas.width = window.innerWidth*0.7;
		canvas.height = window.innerHeight*0.95;
    context.clearRect(0, 0, canvas.width, canvas.height);
	}
});

function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev){
  ev.dataTransfer.setData("path", ev.path[0].src);
  ev.dataTransfer.setData("height", ev.srcElement.height);
  ev.dataTransfer.setData("width", ev.srcElement.width);

}

function dropPicture(ev){
  ev.preventDefault();
  var image = new Image();
  var width = ev.dataTransfer.getData("width");
  var height = ev.dataTransfer.getData("height");
  image.src = ev.dataTransfer.getData("path");
  context.drawImage(image, ev.offsetX-(width/2), ev.offsetY-(height/2), width, height);
}
