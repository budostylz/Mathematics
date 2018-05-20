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

    }
    catch (e) {
        console.log(e);
    }

}

console.log("drag drop");