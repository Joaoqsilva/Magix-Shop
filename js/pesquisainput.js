function filterProducts() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toLowerCase();
    var produtos = document.getElementsByClassName("produto");
    
    for (var i = 0; i < produtos.length; i++) {
      var produtoDescricao = produtos[i].querySelector(".descriçao p").textContent.toLowerCase();
      
      if (produtoDescricao.indexOf(filter) > -1) {
        produtos[i].style.display = "";
      } else {
        produtos[i].style.display = "none";
      }
    }
  }
  
  // Evento para acionar o filtro de pesquisa quando o valor do input é alterado
  var input = document.getElementById("searchInput");
  input.addEventListener("input", filterProducts);


