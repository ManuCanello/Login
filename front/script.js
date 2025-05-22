const b1 = document.getElementById("b1");
const tapa = document.querySelector(".tapa");

b1.addEventListener("click",cambiarLogin)

function cambiarLogin(){
    if(b1.textContent === "Login"){
        tapa.style.marginLeft = "300px";
        b1.textContent = "Sign Up";
    }else{
        tapa.style.marginLeft = "-300px";
        b1.textContent = "Login";
    }
    
}