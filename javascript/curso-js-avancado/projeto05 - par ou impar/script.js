exibirTipo(8)
function exibirTipo(limite) {
    for(let par = 0; par <= limite; par++) {
        if (par % 2 === 0){
            console.log(par, 'PAR')
        }
        else {
            console.log(par, 'IMPAR')
        }
    }
}