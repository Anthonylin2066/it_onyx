var menubtn = document.getElementById("menubtn")
var menubtn = document.getElementById("navbar")
var menubtn = document.getElementById("menu")

navbar.style.right = "-250px"

menubtn.onclick = function(){
    if(navbar.style.right == "-250px"){
        navbar.style.right = "0";
        menu.src = "assets/img/close.png";
    }
    else{
        navbar.style.right ="-250px";
        menu.src = "assets/img/menu.png";
    }
}
