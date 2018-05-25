
function drawRectangle(img) {
    try {
        var canvasObj = $('#canvas');
        var canvasElem = $('#canvas')[0];



        //change width and length dynamically
        //canvasElem.width = 300;
        //canvasElem.height = 69;

        //get canvas width and height
        var x = canvasElem.width;
        var y = canvasElem.height;

        var ctx = canvasElem.getContext("2d");//set context

        ctx.strokeRect(0, 0, 50, 150);
        ctx.strokeRect(10, 0, 50, 150);
        ctx.strokeRect(20, 0, 50, 150);
        ctx.strokeRect(30, 0, 50, 150);
        ctx.strokeRect(40, 0, 50, 150);
        ctx.strokeRect(50, 0, 50, 150);
        ctx.strokeRect(60, 0, 50, 150);
        ctx.strokeRect(70, 0, 50, 150);
        ctx.strokeRect(80, 0, 50, 150);
        ctx.strokeRect(90, 0, 50, 150);
        ctx.strokeRect(100, 0, 50, 150);

        ctx.strokeRect(110, 0, 50, 150);
        ctx.strokeRect(120, 0, 50, 150);
        ctx.strokeRect(130, 0, 50, 150);
        ctx.strokeRect(140, 0, 50, 150);
        ctx.strokeRect(150, 0, 50, 150);
        ctx.strokeRect(160, 0, 50, 150);
        ctx.strokeRect(170, 0, 50, 150);
        ctx.strokeRect(180, 0, 50, 150);
        ctx.strokeRect(190, 0, 50, 150);
        ctx.strokeRect(200, 0, 50, 150);

        ctx.strokeRect(210, 0, 50, 150);
        ctx.strokeRect(220, 0, 50, 150);
        ctx.strokeRect(230, 0, 50, 150);
        ctx.strokeRect(240, 0, 50, 150);
        ctx.strokeRect(250, 0, 50, 150);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(300, 25);
        ctx.stroke();





        ctx.drawImage(img, 0, 50);




    }
    catch (e) {

    }
}


var img = new Image();
var path = $('#drag1')[0].src
img.src = path;


drawRectangle(img);