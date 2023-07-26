function Calcul (x){
    ec=document.querySelector("#ecran");
    if(x=='C'){
        ec.value="";
    }else if(x=="="){
        ec.value=eval(ec.value);
    }else{
        ec.value=ec.value+x;
    }
}