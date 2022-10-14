function fnCambiaNombre(obj){
    if (obj.innerText=="Login") {
        obj.innerText = "Logout"
    }else{
        obj.innerText = "Login"
    }
    
}

let cantidaLike = 0;
function likePracticante(obj){
    cantidaLike = cantidaLike + 1;
    obj.innerText = cantidaLike + " likes"
    alert('ninja was like!!')
}

let cantidaLikeP = 0;
function likeProgramer(obj){
    cantidaLikeP = cantidaLikeP + 1;
    obj.innerText = cantidaLikeP + " likes"
    alert('ninja was like!!')
}