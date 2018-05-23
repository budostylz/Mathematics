function allowDrop(e) {

    try {
        e.preventDefault();

    }
    catch (e){
        console.log(e);
    }


}

function dragIt(e) {

    try {
        e.dataTransfer.setData("text", e.target.id);
        //console.log("drag it")
    }
    catch (e) {
        console.log(e);
    }


}

function dropIt(e) {

    try {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));

        var img = new Image();
        var path = $('#drag1')[0].src
        img.src = path;
        img.setAttribute('crossOrigin', '');


        var canvas = $('#canvas')[0];
        var ctx = canvas.getContext("2d");//set context
        ctx.drawImage(img, 0, 0);

        var canvasImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
        console.log(ctx.getImageData(0, 0, canvas.width, canvas.height));

        console.log(canvas.height);


    }
    catch (e) {
        console.log(e);
    }

}



