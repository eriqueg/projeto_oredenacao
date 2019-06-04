function transfDec(vetor){
    for(x = 0; x< vetor.length; x++){
        vetor[x] = parseFloat(vetor[x]);
    }
    return vetor;
}

function ordenarInsercao(){
    var t0 = performance.now();
    var vetor = [];
    var comp = 0;
    var troc = 0;
    var numAnt = 0;
    var troca = false;
    let texto = document.getElementById("numeros").value;
    vetor = texto.split(",");
    transfDec(vetor)
    console.log(vetor)

    for(x = 1; x < vetor.length; x++){
    
        if(vetor[x] < vetor[x - 1]){
            troca = true; 
            for(y = x; troca ; y--){
                
                if(y - 1 >= 0){
                    if(vetor[y] < vetor[y - 1]){
                        troca = true;
                        comp = comp + 1;
                        troc = troc + 1;
                        numAnt = vetor[y - 1];
                        vetor[y - 1] = vetor[y];
                        vetor[y] = numAnt;
                    }else{
                        comp = comp + 1;
                        troca = false;
                    } 
                }else{
                    troca = false;
                }
                
                
            }
        }else{
            comp = comp + 1;
        }
    
    }
    t1 = performance.now();
    tempo = t1 - t0;
    document.getElementById("ordenados").innerHTML = vetor;
    passos = vetor.length - 1;
    document.getElementById("troc").innerHTML = "Trocas realizadas: " + troc;
    document.getElementById("comp").innerHTML = "Comparacoes realizadas: " + comp;
    document.getElementById("pass").innerHTML = "Passos necessários: " + passos;
    document.getElementById("temp").innerHTML = "Tempo decorrido: " + tempo;

    let data = new Date;
    localStorage.setItem(formatarData(data), vetor);


}


function ordenarSelecao (){
    var t0 = performance.now();
    var trocas = 0;
    var comparacoes = 0;
    var passos = 0;
    var menor;
    var posicao;
    var vetor = []
    let texto = document.getElementById("numeros").value;
    vetor = texto.split(",");
    transfDec(vetor)
    var posiAnt;
    isTroca = false;
    console.log("----------------ORDENAÇÃO POR SELEÇÃO-----------");
    console.log("Vetor não ordenado: ",vetor)
    

    for(x = 0; x < vetor.length; x++){
        passos = passos + 1;
        menor = vetor[x];
        isTroca = false;
        for(y = x+1; y < vetor.length; y++){
            if(vetor[y] < menor){
                posicao = y;
                menor = vetor[y];
                isTroca = true;
                posiAnt = vetor[y];

            }
            comparacoes++;
        }

        if(isTroca){
            vetor[posicao] = vetor[x];
            vetor[x] = posiAnt;
            trocas = trocas + 1;
        }
    }
    var t1 = performance.now();
    var tempo = t1 - t0;

    document.getElementById("ordenados").innerHTML = vetor;
    passos = passos - 1;
    document.getElementById("troc").innerHTML = "Trocas realizadas: " + trocas;
    document.getElementById("comp").innerHTML = "Comparacoes realizadas: " + comparacoes;
    document.getElementById("pass").innerHTML = "Passos necessários: " + passos;
    document.getElementById("temp").innerHTML = "Tempo decorrido: " + tempo;

    let data = new Date;
    localStorage.setItem(formatarData(data), vetor);

    console.log("trocas: ", trocas);
    console.log("Comparações: ", comparacoes);
    console.log("Passos: ", vetor.length - 1);
    console.log("Vetor Ordenado: ",vetor);
    console.log("Tempo decorrido: ", tempo)
}


function ordenarBolha(){
    var t0 = performance.now();
    var cont = 0;
    var trocas = 0;
    var pesquisa = 0;
    var vetor = []
    let texto = document.getElementById("numeros").value;
    vetor = texto.split(",");
    transfDec(vetor)
    var compVet = vetor.length - 1;
    console.log("----------------ORDENAÇÃO POR BOLHA-----------");
    console.log("Vetor não ordenado:",vetor)
    for(x = 0; x < vetor.length; x++ ){
        cont = cont +1;
        for(y = 0; y < compVet; y++){
            
            if(vetor[y] > vetor[y + 1]){
                var posiAnt = vetor[y + 1]
                vetor[y + 1] = vetor[y]
                vetor[y] = posiAnt;
                trocas = trocas + 1;
                pesquisa = pesquisa + 1;
            
                
            }else{
                pesquisa = pesquisa + 1;
            }
        }
        compVet = compVet - 1;
    }
    var t1 = performance.now();
    var tempo = t1 - t0;
    document.getElementById("ordenados").innerHTML = vetor;
    let passos = cont - 1;
    document.getElementById("troc").innerHTML = "Trocas realizadas: " + trocas;
    document.getElementById("comp").innerHTML = "Comparacoes realizadas: " + pesquisa;
    document.getElementById("pass").innerHTML = "Passos necessários: " + passos;
    document.getElementById("temp").innerHTML = "Tempo decorrido: " + tempo;
    let data = new Date;
    localStorage.setItem(formatarData(data), vetor);

    console.log("Passos:",cont-1);
    console.log("Trocas:",trocas);
    console.log("Pesquisa:",pesquisa);
    console.log("Vetor ordenado:",vetor);
    console.log("Tempo decorrido: ", tempo)
}

function formatarData(data){
    return data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear();
}

/*ordenarSelecao();
ordenarBolha();*/