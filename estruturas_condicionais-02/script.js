var idade = parseInt(prompt("Informe a sua idade", "18"));

if (isNaN(idade)){
    alert("O número informado não é válido!");
}

else if (idade < 18){
    alert("A idade informada é de um menor!")
}

else{
    alert("Se não estiver mentindo é maior de idade!");
}