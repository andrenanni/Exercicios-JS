var n1 = prompt("Informe o primeiro número", "100");
var n2 = prompt("Informe o segundo número", "200");
var n3 = prompt("Informe o terceiro número", "300");

if ((n1 > n2) && (n1 > n3)){
    alert("O primeiro número informado é maior!");
}

else if ((n2 > n1) && (n2 > n3)){
    alert("O segundo número informado é maior!");
}

else if ((n3 > n1) && (n3 > n2)){
    alert("O terceiro número informado é maior!");
}

else{
    alert("Os números são iguais ou nada foi informado");
}