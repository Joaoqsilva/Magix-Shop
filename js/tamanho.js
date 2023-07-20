
       // Função para filtrar os produtos com base no tamanho selecionado
       function filterProducts() {
        var selectedSize = document.querySelector('input[name="tamanho"]:checked').value;
        var produtos = document.getElementsByClassName("produto");
        
        for (var i = 0; i < produtos.length; i++) {
          var produtoTamanho = produtos[i].getAttribute("data-tamanho");
          
          if (selectedSize === produtoTamanho.toLowerCase()) {
            produtos[i].style.display = "";
          } else {
            produtos[i].style.display = "none";
          }
        }
      }
      
      // Evento para acionar o filtro de pesquisa ao selecionar um tamanho
      var sizeInputs = document.querySelectorAll('input[name="tamanho"]');
      
      for (var i = 0; i < sizeInputs.length; i++) {
        sizeInputs[i].addEventListener("change", filterProducts);
      }