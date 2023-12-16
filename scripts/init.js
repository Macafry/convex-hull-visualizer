function bind(canvas, shape) {
    canvas.onmousedown = (evt) => rightDown(evt,canvas,shape);
    canvas.onmousemove = (evt) => rightDrag(evt,canvas,shape);
    canvas.onmouseup = () => rightUp(shape);
    canvas.addEventListener('contextmenu', (evt) => leftClick(evt, canvas, shape));    
}

let canvasA = document.getElementById("shapeA")

let shapeA = new Shape(canvasA, "#5f6875", "#d00");
shapeA.addPoint([-.3,-.4]);
shapeA.addPoint([-.2,.4]);
shapeA.addPoint([.9,.9]);
shapeA.render();

bind(canvasA, shapeA);