console.log("hola");
document.getElementById("titulo").addEventListener("mouseover", sobre(this));
document.getElementById("titulo").addEventListener("mouseout", quitar(this));


function imprimirSuma(){
    //Obtenemos el valor de el input "entrada"
    var a = document.getElementById("entradaSum1").value;
    var b = document.getElementById("entradaSum2").value;
    //Operacion a realizar
    res =  parseInt(a)+parseInt(b);
    //Imprimimos en label
    document.getElementById("resSum").innerHTML =  res;
}

function imprimirRes(){
    //Obtenemos el valor de el input "entrada"
    var a = document.getElementById("entradaRes1").value;
    var b = document.getElementById("entradaRes2").value;
    //Operacion a realizar
    res =  parseInt(a)-parseInt(b);
    //Imprimimos en label
    document.getElementById("resRes").innerHTML =  res;
}

function imprimirDiv(){
    //Obtenemos el valor de el input "entrada"
    var a = document.getElementById("entradaDiv1").value;
    var b = document.getElementById("entradaDiv2").value;
    //Operacion a realizar
    res =  parseInt(a)/parseInt(b);
    //Imprimimos en label
    document.getElementById("resDiv").innerHTML =  res;
}

function imprimirMul(){
    //Obtenemos el valor de el input "entrada"
    var a = document.getElementById("entradaMul1").value;
    var b = document.getElementById("entradaMul2").value;
    //Operacion a realizar
    res =  parseInt(a)*parseInt(b);
    //Imprimimos en label
    document.getElementById("resMul").innerHTML =  res;
}

function sobre(x){
    x.style.color="purple";
    x.style.fontSize = "2.5em";
}

function quitar(x){
    x.style.color="black";
    x.style.fontSize = "2em";
    console.log("quitar");
}