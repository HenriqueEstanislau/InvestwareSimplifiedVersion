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
var pConservador = "Conservador"
var pModerado = "Moderado"
var pArrojado = "Arrojado"

//funcao verificar disparada quando o botão "simular" é clicado
function verificar(){
    try {
        //habilita o gráfico e desabilita as perguntas (deve ser colocado no começo para ter o efeito de animação no chart.js)
        document.getElementById('chart').style.display = "inline";
        document.getElementById('quest').style.display = "none";  
        
        //Ancora
        window.location.href = "#title"

        //escreve no HTML o valor total a ser investido
        // var valorTot = document.querySelector('div#valortotal')
        // let tot = slider.value * 1000
        // valorTot.innerHTML += `<p class='valorTotal'>${tot.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`


        //faz uma verificação no questionário para ver se todos os campos foram preenchidos
        var rendimentos = document.getElementsByClassName("rendimentos")
        var tempo = document.getElementsByClassName("tempo")
        if (rendimentos[0].checked) {
            grafico(perfilConservadorTitulos, perfilConservador)
            imprimir(perfilConservadorTitulos, perfilConservador, slider)
            calculoValor(perfilConservador)
            imprimirSubtitle(pConservador)

        }else if (rendimentos[1].checked) {
            grafico(perfilArrojadoTitulos, perfilModerado)
            imprimir(perfilArrojadoTitulos, perfilModerado, slider)
            calculoValor(perfilModerado)
            imprimirSubtitle(pModerado)

        }else if (rendimentos[2].checked) {
            grafico(perfilArrojadoTitulos, perfilArrojado)
            imprimir(perfilArrojadoTitulos, perfilArrojado, slider)
            calculoValor(perfilArrojado)
            imprimirSubtitle(pArrojado)

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
            apareceTela.innerHTML = `<p class='small-title'>Valor</p>`

            var total = slider.value * 1000
            var valorFinal = 0
            var percent = 0
            for(var j in porcentagem){
                percent = porcentagem[j]/100
                valorFinal = total * percent
                apareceTela.innerHTML += `<p>${valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
            }

            var porcentagemTela = document.getElementById("porcentagem")
            var valorPorcentagem = 0
            porcentagemTela.innerHTML += `<p class='small-title'>Alocação</p>`
            for(var k in porcentagem){
                valorPorcentagem = porcentagem[k]
                porcentagemTela.innerHTML += `<p>${valorPorcentagem}%</p>`
                //console.log(valorPorcentagem)
            }

        }

        //escreve no HTML os dados da categoria, porcentagem e valor
        function imprimir(perfilName){
            var res = document.querySelector('div#categoria')
            res.innerHTML += "<p class='small-title'>Categoria</p>"
            for (var i in perfilName){
                res.innerHTML += `<p>${perfilName[i]}</p>`
            }
        }
        
        //escreve no HTML os dados do perfil de investidor
        function imprimirSubtitle(perfilInvestidor){
            var perfilInvest = document.querySelector('div#perfilInvest')
            perfilInvest.innerHTML += `<p>O gráfico de rentabilidade apresentado foi gerado utilizando a Carteira Recomendada da <a href="https://www.xpi.com.br/" class="XPI" target="_blank">XP Investimentos</a>, que é compativel com o perfil ${perfilInvestidor}. Para saber mais detalhes sobre os produtos que compõem esta carteira recomendamos que você acesse o site da <a href="https://www.xpi.com.br/" class="XPI" target="_blank">XP Investimentos</a>. O perfil ${perfilInvestidor} não necessariamente será o seu perfil de investidor. Para um calculo mais preciso você pode fazer o teste na nossa plataforma em "Perfil de Investidor".<br> As informações presentes neste material técnico são baseadas em simulações e os resultados reais poderão ser significativamente diferentes.</p>`
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
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
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
                                beginAtZero: true,
                            }
                        }]
                    },
                    animation: {
                        duration: 1250
                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];


                            var currentValue = dataset.data[tooltipItem.index];  
                            return " " + currentValue + "%";
                            }
                        }
                    }
            }
        });
}
