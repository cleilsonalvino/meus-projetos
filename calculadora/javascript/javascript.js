    
      function inserir (num) {
        var operadores = document.getElementById('operadores')
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;

        operadores = []

        }
        function clean () {
          document.getElementById('resultado').innerHTML = ''
        }
        function apagarUm() {
          var back = document.getElementById('resultado').innerHTML;
          document.getElementById('resultado').innerHTML = back.substring(0, back.length -1)
        }
        function calcular () {
          var resultado = document.getElementById('resultado').innerHTML;
          if (resultado) {
            document.getElementById('resultado').innerHTML = eval(resultado);
          } else {
            document.getElementById('resultado').innerHTML = 'Valor inválido'
          }
        }
