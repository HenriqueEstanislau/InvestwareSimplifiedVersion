//Range slider
var slider = document.getElementById("rangeSlider");
var money = document.getElementById("money")
money.innerHTML = `R$ ${slider.value}.000`;
slider.oninput = function() {
    money.innerHTML = `R$ ${this.value}.000`;
}
//desativando a section chart
document.getElementById('chart').style.display = "none";
//dados dos perfis
var perfilConservador = [85, 10, 5]
var perfilModerado = [18, 28.5, 11, 15, 27.5]
var perfilArrojado = [28, 27, 25, 15, 5]
var perfilConservadorTitulos = ['Pós fixado', 'Inflação', 'Internacional']
var perfilArrojadoTitulos = ['Internacional', 'Multimercado', 'Renda Variável', 'Inflação', 'Pós Fixado']
//funcao verificar disparada quando o botão "simular" é clicado
function verificar(){
    try {
        //habilita o gráfico e desabilita as perguntas (deve ser colocado no começo para ter o efeito de animação no chart.js)
        document.getElementById('chart').style.display = "inline";
        document.getElementById('quest').style.display = "none";   

        //faz uma verificação no questionário para ver se todos os campos foram preenchidos
        var rendimentos = document.getElementsByClassName("rendimentos")
        var tempo = document.getElementsByClassName("tempo")
        if (rendimentos[0].checked) {
            grafico(perfilConservadorTitulos, perfilConservador)
            imprimir(perfilConservadorTitulos, perfilConservador, slider)
            calculoValor(perfilConservador)

        }else if (rendimentos[1].checked) {
            grafico(perfilArrojadoTitulos, perfilModerado)
            imprimir(perfilArrojadoTitulos, perfilModerado, slider)
            calculoValor(perfilModerado)

        }else if (rendimentos[2].checked) {
            grafico(perfilArrojadoTitulos, perfilArrojado)
            imprimir(perfilArrojadoTitulos, perfilArrojado, slider)
            calculoValor(perfilArrojado)

        }else{
            alert("Escolha uma opção na pergunta 1")
            window.location.href = "../Simulation/Simulation.html"
        }

        if (tempo[0].checked == false && tempo[1].checked == false && tempo[2].checked == false){
            alert("Você precisa escolher uma opção na pergunta 3")
            window.location.href = "../Simulation/Simulation.html"
        }
        //calculo slider calcula as porcentagens do total investido 
        
        function calculoValor(porcentagem){
            var apareceTela = document.getElementById("valor")
            apareceTela.innerHTML = `<p>Valor:</p><br>`

            var total = slider.value * 1000
            var valorFinal = 0
            var percent = 0
            for(var j in porcentagem){
                percent = porcentagem[j]/100
                valorFinal = total * percent
                apareceTela.innerHTML += `<p> R$ ${valorFinal.toFixed(2)} </p>`
            }

            var porcentagemTela = document.getElementById("porcentagem")
            var valorPorcentagem = 0
            porcentagemTela.innerHTML += `<p>Alocação</p><br>`
            for(var k in porcentagem){
                valorPorcentagem = porcentagem[k]
                porcentagemTela.innerHTML += `<p>${valorPorcentagem}%</p>`
                console.log(valorPorcentagem)
            }

        }

        //escreve no HTML os dados da categoria, porcentagem e valor
        function imprimir(perfilName, perfilData, slider){
            var res = document.querySelector('div#categoria')
            res.innerHTML += "<p>Categoria</p><br>"
            for (var i in perfilName){
                res.innerHTML += `<p>${perfilName[i]}</p>`
            }
        }    
        
    } catch (error) {
        //se algum erro inesperado acontecer
        console.log("Deu erro: " + error )
    }
}
//função do gráfico, recebe os dados definidos em verificar() e gera o grafico correspondente
function grafico(perfilName, perfilData){ 
    
    var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: perfilName,
                datasets: [{
                    label: 'Investimentos',
                    data: perfilData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.9)',
                        'rgba(54, 162, 235, 0.9)',
                        'rgba(255, 206, 86, 0.9)',
                        'rgba(75, 192, 192, 0.9)',
                        'rgba(153, 102, 255, 0.9)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 3  
                }]
            },
            options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    animation: {
                        duration: 1250
                    }
            }
        });
}