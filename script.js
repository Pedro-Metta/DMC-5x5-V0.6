let player = document.getElementById('eplayer')
let lista = document.getElementById('elista')
let res = document.getElementById('res')
let valores = []

// Verifica se ja tem na lista
function inLista(n, l){
    if(l.indexOf(n) != -1){
        return true
    }else {
        return false
    }
}

// function isSpace(n){
//     if(player.length <= 2){
//         return n = 0
//     } else {
//         return n = 1
//     }
// }

// Função para adicionar
function adicionar(){
    if(player.value == ''|| !player.value.trim()){   //Verifica se há um nome inserido
        alert('Insirá o nome do criminoso!')
    } else if(!inLista(player.value, valores)){ //Verifica se tem na lista
        valores.push(player.value)
        let item = document.createElement('option')
        item.text = ` ${player.value} `
        lista.appendChild(item)


    }else {
        window.alert('Valor Inválido, ou já está na lista!') //Aviso caso já tenha o nome
    }

    //Reseta o campo e deixa selecionado
    player.value = ''
    player.focus()



}

function limpar(){  //Limpa os campos da lista e dos times para gerar novos times
    
    document.getElementById('elista').innerText = null;
    document.getElementById('res').innerText = null;

}

function sortear(l){

        // verifica se a tamanho da lista esta correto
        if (valores.length % 2 != 0) {
            alert('Insira mais 1 player')
            console.error('Insira mais 1 player!');
        } else{
            let currentIndex = valores.length, randomIndex;
            // embaralha a lista enquanto houver elementos nas posições
            while (currentIndex != 0) {
        
              // Seleciona um elemento aleatoriamente
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
        
              // troca o elemento selecionado com o elemento que possui a posição
              let aux = valores[currentIndex];
              valores[currentIndex] = valores[randomIndex];
              valores[randomIndex] = aux
            }
        
           
            //Separa os times e loga no console os times
            let time1 = valores.slice(0, (valores.length / 2));
            let time2 = valores.slice((valores.length / 2), valores.length);
            console.log("time 1:" + time1)
            console.log("time 2:" + time2)

            
            
            
            res.innerHTML += `--------------------<br>`
            res.innerHTML += `
            \u{2B07}TIME 1\u{2B07} <br>
            TOP ${time1[0]}<br>
            JG  ${time1[1]}<br>
            MID ${time1[2]}<br>
            ADC ${time1[3]}<br>
            SUP ${time1[4]}<br> `
            res.innerHTML += `--------------------<br>`

            res.innerHTML += `
            \u{2B07}TIME 2\u{2B07} <br>
            TOP ${time2[0]}<br>
            JG  ${time2[1]}<br>
            MID ${time2[2]}<br>
            ADC ${time2[3]}<br>
            SUP ${time2[4]}<br> `
            res.innerHTML += `--------------------<br>`

            //Procurar saber como fazer a posição do vetor dos times imprimir em cada role a posição no vetor
           
        }
      
}
