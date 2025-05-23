const b1 = document.getElementById("b1");
const tapa = document.querySelector(".tapa");
const principal = document.querySelector(".principal");
const newUsuario = document.getElementById("newUsuario");
const newPassword = document.getElementById("newPassword");
const secondNewPassword = document.getElementById("secondNewPassword");
const crear = document.getElementById("crear");

b1.addEventListener("click",cambiarLogin);
newUsuario.addEventListener("blur",cambiarColorUsuario);
newPassword.addEventListener("blur",comprobarContas)
secondNewPassword.addEventListener("blur",comprobarContas)
crear.addEventListener("click",enviarUsuario)

function cambiarLogin(){
    if(b1.textContent === "Login"){
        tapa.style.marginLeft = "300px";
        principal.style.marginLeft = "-300px"
        b1.textContent = "Sign Up";
    }else{
        tapa.style.marginLeft = "-300px";
        principal.style.marginLeft = "300px"
        b1.textContent = "Login";
    }
    
}


//funcion para verificar si las contras son iguales
function comprobarContas(){
    if(!isEmpty(newPassword.value) && !isEmpty(secondNewPassword.value))
    if(newPassword.value === secondNewPassword.value){
        cambiarColorBordeContras("green");
        return true;
    }else{
        cambiarColorBordeContras("red");
        return false;
    }
}



//funcion para cambiar color del nombre de usuario
async function cambiarColorUsuario(){
    try{
        if(!isEmpty(newUsuario.value)){
            const respuesta = await existeUsuario(newUsuario.value);
        
            if(respuesta.existe){
                cambiarColorBordeUsuario("red");
                console.log("si");
                return false;
            }else{
                cambiarColorBordeUsuario("green");
                console.log("no");
                return true;
            }
        }
    }catch(error){
        console.log(error);
    }
}


function cambiarColorBordeUsuario(color){
    newUsuario.style.borderColor = color;
}

function cambiarColorBordeContras(color){
    newPassword.style.borderColor = color;
    secondNewPassword.style.borderColor = color;
}

function isEmpty(str) {
    return !str || !str.trim();
}



async function enviarUsuario(){
    if(cambiarColorUsuario() && comprobarContas()){
        crearUsurio();
    }
}




//Consumo API
async function obtenerUsuarios(){
    fetch('http://localhost:8080/api/usuario')
    .then(response => response.json())
    .then(data => console.log(data))

}

async function crearUsurio(){
    let nuevoUsuario = {
        users:newUsuario.value,
        passwords:newPassword.value,
    }
    console.log(nuevoUsuario.users+" "+nuevoUsuario.passwords);
    fetch('http://localhost:8080/api/usuario/new',{ 
        method: 'POST', 
        mode: 'cors', 
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario) 
    })
    .then(()=>{
        alert("Registrado")
    })
    .catch((err)=>{
        alert("error inesperado")
    })
    
}

async function existeUsuario(username) {
    const response = await fetch(`http://localhost:8080/api/usuario/find/${username}`);
    if (!response.ok) throw new Error("Error al consultar");
    return await response.json()
}


