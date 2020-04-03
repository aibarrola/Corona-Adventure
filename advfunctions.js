
// ADVENTURE 1 FUNCTIONS________________________________________________________________________________

function showZoom(){
    var img = document.getElementById("zoom");
    var link = document.querySelector('button');
    document.getElementById("skipClass").disabled = true;                   //Disables Skip Class button 
    img.style.visibility = "visible";
    link.setAttribute("onClick", "location.href='deathscreen.html'");       //Changes the function of the button
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

function costcoShutdown(){                              //Makes background black and shows next prompt
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
        alert("Karen smashes you with the shopping cart multiple times");
        document.location.href='deathscreen.html';
    }
}

// ADVENTURE 5 FUNCTIONS_________________________________________________________________________________

function showCaroffer(){
    var offer = document.getElementById("carOffer");
    offer.style.visibility="visible";

}


function andrew(){
    alert("he eats your ass and starts licking you feet but then accidentally bites your toe and you start bleeding");
    document.location.href='deathscreen.html';
}

function derek(){
    alert("he takes you to the basketball court and breaks both of your ankles and get dunked on");
    document.location.href='deathscreen.html';
}
function kristin(){
    alert("you both do karaoke with her beautiful voice and as you are singing your heart out she slices you up with her ninja umbrella skills");
    document.location.href='deathscreen.html';
}
function calvin(){
    document.location.href='adv6.html';
}
function brandon(){
    alert("he takes 348943 picture of you with flash making you go blind and he takes your food and your life with a pickaxe");
    document.location.href='deathscreen.html';
}
function brandondoan(){
    alert("he lets you play tetris with him and then he sings so loud that your ears start bleeding");
    document.location.href='deathscreen.html';
}
function kim(){
    alert("she tries to teach you renegade but accidentally punches you too hard");
    document.location.href='deathscreen.html';
}
function anna(){
    alert("she takes you back to her place to record a mukbang and eat a lot of food which was fun! Then she brings you to her hot tub and weirdly enough she starts to season the hot tub you are in and she grabs her knife to eat you :) ");
    document.location.href='deathscreen.html';
}
function don(){
    alert("he shows you his collection of 284 dogs that he pets everyday but forgets to feed and they eat you up");
    document.location.href='deathscreen.html';
}


