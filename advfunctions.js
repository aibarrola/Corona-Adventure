
// ADVENTURE 1 FUNCTIONS________________________________________________________________________________

function showZoom(){
    var img = document.getElementById("zoom");

    document.getElementById("skipClass").disabled = true;
    img.style.visibility = "visible";
}

// ADVENTURE 4 FUNCTIONS_________________________________________________________________________________

function showChat1(){
    var chat = document.getElementById("chat1");
    chat.style.visibility="visible";
}

function showChat2(){
    var chat = document.getElementById("chat2");
    var input = document.getElementById("favword").value;
    var password = "ligma";
    if(input === password){
        chat.style.visibility="visible";
    }
}

function costcoShutdown(){
    var prompt = document.getElementById("prompt1");
    document.body.style.backgroundColor = "black";

    prompt.style.visibility="visible";
}

function checkCode(){
    var input = document.getElementById("numinput").value;
    var numcode = "1013";
    if(input === "1013"){
        document.location.href='adv5.html';
    }else{
        alert("WR0NG. L00K CAREFULLY.");
    }
}