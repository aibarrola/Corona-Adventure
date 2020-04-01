
// ADVENTURE 1 FUNCTIONS________________________________________________________________________________

function showZoom(){
    var img = document.getElementById("zoom");
    img.style.visibility = "visible";
}

// ADVENTURE 3 FUNCTIONS_________________________________________________________________________________

function costcoBackground(){
    var text = document.getElementById("costcotext");

    text.style.backgroundColor = "lightblue";
    document.body.style.backgroundImage = "url('costco1.jpg')";
    document.body.style.backgroundColor = "transparent";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.filter = "blur('8px')";
    document.body.style.height = "900px";
}
