var addcart = document.getElementById ("addcart");

const btnMobile = document.getElementById ('btn-mobile');

function toggleMenu () {
    const nav = document.getElementById ('nav');
    nav.classList.toggle('active');

}
btnMobile.addEventListener('click', toggleMenu);


    // Função para filtrar as roupas com base no termo de pesquisa
    function filtrarRoupas() {
      // Obter o valor do termo de pesquisa digitado pelo usuário
      var termoPesquisa = document.getElementById("termo-pesquisa").value.toLowerCase();
      
      // Selecionar todos os elementos de produto
      var produtos = document.getElementsByClassName("produto");
      
      // Iterar sobre cada produto
      for (var i = 0; i < produtos.length; i++) {
        // Obter a descrição do produto
        var descricao = produtos[i].querySelector(".descriçao p").textContent.toLowerCase();
        
        // Verificar se o termo de pesquisa está presente na descrição do produto
        if (descricao.includes(termoPesquisa)) {
          // Exibir o produto
          produtos[i].style.display = "block";
        } else {
          // Ocultar o produto
          produtos[i].style.display = "none";
        }
      }
    }
    
    // Adicionar um evento de input para o campo de pesquisa
    var termoPesquisaInput = document.getElementById("termo-pesquisa");
    termoPesquisaInput.addEventListener("input", filtrarRoupas);
    
    
    
     // Adicionar eventos de mudança para os elementos do filtro
     var corSelect = document.getElementById("cor");
     corSelect.addEventListener("change", filtrarRoupas);
    
     var tamanhoSelect = document.getElementById("tamanho");
     tamanhoSelect.addEventListener("change", filtrarRoupas);
    
     var marcaInput = document.getElementById("marca");
     marcaInput.addEventListener("input", filtrarRoupas);
    
     // Função para filtrar as roupas com base nos filtros selecionados
     function filtrarRoupas() {
       var termoPesquisa = document.getElementById("termo-pesquisa").value.toLowerCase();
       var corSelecionada = corSelect.value.toLowerCase();
       var tamanhoSelecionado = tamanhoSelect.value.toLowerCase();
       var marcaDigitada = marcaInput.value.toLowerCase();
       
       var produtos = document.getElementsByClassName("produto");
    
       for (var i = 0; i < produtos.length; i++) {
         var produto = produtos[i];
         var corProduto = produto.getAttribute("data-cor").toLowerCase();
         var tamanhoProduto = produto.getAttribute("data-tamanho").toLowerCase();
         var marcaProduto = produto.getAttribute("data-marca").toLowerCase();
         var descricao = produto.querySelector(".descriçao p").textContent.toLowerCase();
    
         var correspondeFiltro = 
           (corSelecionada === "" || corSelecionada === corProduto) &&
           (tamanhoSelecionado === "" || tamanhoSelecionado === tamanhoProduto) &&
           (marcaDigitada === "" || marcaProduto.includes(marcaDigitada)) &&
           descricao.includes(termoPesquisa);
    
         produto.style.display = correspondeFiltro ? "block" : "none";
       }
     }
    
     var termoPesquisaInput = document.getElementById("termo-pesquisa");
     termoPesquisaInput.addEventListener("input", filtrarRoupas);
    
    
    

function toggleIcon(){
  var addfavoritos = document.getElementById("addfavorito");
  addfavoritos.addEventListener('click', toggleIcon);

  if (addfavoritos) {
    addfavoritos.style.color ='red';
    addfavoritos.style.fontWeight= 600;  
  }
   else  {
    var addfavoritos = document.getElementById("addfavorito");
    addfavoritos.style.color ='green';
    addfavoritos.style.fontWeight= 100;
    
   } 
    
      
 
}


function toggleFiltro () {
  var btn = document.getElementById("btn-hv")
  const filtro = document.getElementById ('filtro');
  filtro.classList.toggle('active');
  if (btn.style.transform === 'rotate(90deg)') {
    btn.style.transform = '';
  } else {
    btn.style.transform = 'rotate(90deg)';
  }
  
 
  filtro.classList.toggle('open');
  

}   
btn.addEventListener('click', toggleFiltro);















/* 

nolinks.addEventListener("click", function(event) {
  event.preventDefault(); 
});

function toggle1() {
  var nolinks = document.getElementById("nolinks")
  var addlike = document.getElementById("addlike");
  addlike.style.color = "red";

  var contagem = document.getElementById("contagem")
  var numeroAtual = parseInt (contagem.textContent);
  var novoNumero = numeroAtual + 1;
  contagem.textContent = novoNumero;
}


function filtrarRoupas() {
  var corSelecionada = document.getElementById("cor").value;
  var tamanhoSelecionado = document.getElementById("tamanho").value;
  var marcaDigitada = document.getElementById("marca").value.toLowerCase();
  
  var roupas = document.getElementsByClassName("roupa");
  
  for (var i = 0; i < roupas.length; i++) {
    var cor = roupas[i].getAttribute("data-cor");
    var tamanho = roupas[i].getAttribute("data-tamanho");
    var marca = roupas[i].getAttribute("data-marca").toLowerCase();
    
    if ((corSelecionada === "" || cor === corSelecionada) &&
        (tamanhoSelecionado === "" || tamanho === tamanhoSelecionado) &&
        (marcaDigitada === "" || marca.indexOf(marcaDigitada) > -1)) {
      roupas[i].style.display = "block";
    } else {
      roupas[i].style.display = "none";
    }
  }
}


// Adicionar eventos de mudança para os elementos do filtro
var corSelect = document.getElementById("cor");
corSelect.addEventListener("change", filtrarRoupas);

var tamanhoSelect = document.getElementById("tamanho");
tamanhoSelect.addEventListener("change", filtrarRoupas);

var marcaInput = document.getElementById("marca");
marcaInput.addEventListener("input", filtrarRoupas);

  */
