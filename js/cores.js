
     // Função para filtrar os produtos conforme a cor selecionada nos inputs de rádio
     function filterProducts() {
        var inputs = document.querySelectorAll('input[name="color"]');
        var selectedColor;
        
        for (var i = 0; i < inputs.length; i++) {
          if (inputs[i].checked) {
            selectedColor = inputs[i].value;
            break;
          }
        }
        
        var produtos = document.getElementsByClassName("produto");
        
        for (var i = 0; i < produtos.length; i++) {
          var produtoCor = produtos[i].getAttribute("data-cor");
          
          if (produtoCor.toLowerCase() === selectedColor) {
            produtos[i].style.display = "";
          } else {
            produtos[i].style.display = "none";
          }
        }
      }
      
      // Evento para acionar o filtro de pesquisa quando a cor selecionada nos inputs de rádio é alterada
      var inputs = document.querySelectorAll('input[name="color"]');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", filterProducts);
      }
  