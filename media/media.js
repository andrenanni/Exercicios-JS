function media(){
    let nom = prompt("Qual é o nome do aluno?");
    let n1 = Number(prompt(`Qual foi a primeira nota de ${nom}`));
    let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`));
    med = (n1 + n2) / 2;

    let msg
    if (med >= 6){
        msg = 'Meus parabéns!'
    }
    else{
        msg = 'Estude um pouco mais!'
    }

    let res = document.getElementById('situação')
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>`;
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`;
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`;
    res.innerHTML += `<p>A mensagem que temos é: <strong style='color:crimson;'>${msg}</strong></p>`;
};