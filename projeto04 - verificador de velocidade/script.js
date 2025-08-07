// velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// caso pontos maior que 12 -> 'Carteira Suspendida'
verificarVelocidade(130)


function verificarVelocidade(velocidade) {
    const limite = 70
    if (velocidade <= limite) {
        console.log("Ok")
    }
    else {
        let excesso = velocidade - limite;
        let pontos = Math.floor(excesso / 5);
        if (pontos > 12){
            console.log('Carteira suspensa')
        }
        else {
            console.log(`Sua quantidade de pontos é ${pontos}`)
        }
    }

}