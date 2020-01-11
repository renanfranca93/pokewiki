var pokemon = document.querySelector('input');
var botao = document.querySelector('button');
var local = document.querySelector('#resultado');

botao.onclick = cacarPokemon;

function cacarPokemon(){


axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemon.value)
.then(function(response){
    
    local.innerHTML = '';

    var quebraLinha = document.createElement('br');
    local.appendChild(quebraLinha);

    var labelNome = document.createTextNode('Seguem os dados do pokemon ');  
    local.appendChild(labelNome);

    var nome = response.data.name;
    var incluiNome = document.createTextNode(nome);      
    local.appendChild(incluiNome);
    var quebraLinha = document.createElement('br');
    local.appendChild(quebraLinha);
    var quebraLinha = document.createElement('br');
    local.appendChild(quebraLinha);
    

    

    //tipo
    
    var tipo = response.data.types;
    var tipoTamanho = tipo.length;

    var labelTipos = document.createTextNode('Tipo(s): ');  
    local.appendChild(labelTipos);
    
    for(i=0;i<tipoTamanho;i++){
        var tipoHtml = response.data.types[i].type.name;
        var incluiTipo = document.createTextNode(tipoHtml);  
        local.appendChild(incluiTipo);
       
        if(i!=tipoTamanho-1){
            var virgula = document.createTextNode(', ');  
            local.appendChild(virgula);

        }
    }

    var quebraLinha = document.createElement('br');
    local.appendChild(quebraLinha);

    //habilidades
    var habilidades = response.data.abilities;
    //console.log(response.data.abilities[0].ability.name);
    var habilidadesTamanho = habilidades.length;

    var labelHabilidades = document.createTextNode('Habilidade(s): ');  
    local.appendChild(labelHabilidades);
    
    for(i=0;i<habilidadesTamanho;i++){
        var habilidadesFinal = response.data.abilities[i].ability.name;
        var incluiHabilidades = document.createTextNode(habilidadesFinal);  
        local.appendChild(incluiHabilidades);
        if(i!=habilidadesTamanho-1){
            var virgula = document.createTextNode(', ');  
            local.appendChild(virgula);

        }

    }
    

    //imagem
    var quebraLinha = document.createElement('br');
    local.appendChild(quebraLinha);

    var imagem = document.createElement('img');
    imagem.setAttribute('src',response.data.sprites.front_default);
    local.appendChild(imagem);


    //saiba mais
    var quebraLinha = document.createElement('br');
    local.appendChild(quebraLinha);
    var quebraLinha = document.createElement('br');
    local.appendChild(quebraLinha);
    
    var saibaMais = document.createElement('a');
    saibaMais.setAttribute('href','https://www.pokemon.com/br/pokedex/'+nome);
    var labelSaibaMais = document.createTextNode('Saiba mais...');
    saibaMais.appendChild(labelSaibaMais);
    local.appendChild(saibaMais);
    


   
})
.catch(function(error){
    
    local.innerHTML = '';
    var msg = document.createTextNode('Pokemon desaparecido! Busque por outro!');  
    local.appendChild(msg);


});
}


//adiciona item com enter
pokemon.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) { // codigo da tecla enter
      cacarPokemon();
    }
  });