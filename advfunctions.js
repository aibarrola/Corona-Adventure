
// ADVENTURE 1 FUNCTIONS________________________________________________________________________________

function showZoom(){
    var img = document.getElementById("zoom");
    var link = document.querySelector('button');

    document.getElementById("skipClass").disabled = true;
    img.style.visibility = "visible";

    link.setAttribute("onClick", "location.href='deathscreen.html'");
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
    input = input.toLowerCase();
    if(input === password){
        chat.style.visibility="visible";
    }else{
        alert("Wrong bitch. Go ask James or look at Tab");
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
        document.location.href='deathscreen.html';
    }
}

// ADVENTURE 5 FUNCTIONS_________________________________________________________________________________

