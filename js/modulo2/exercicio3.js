function terceira2() {
    //String array 
    var nomes = ["Diego", "Gabriel", "Lucas"];
    //Selencionando o elemento
    var target = document.getElementById('tres2');
    //Fazendo um enhaced loop
    for(let nome of nomes) {
        var elemento = document.createElement('li');

        var text = document.createTextNode(nome);
        elemento.appendChild(text);

        target.appendChild(elemento);
    }
}
