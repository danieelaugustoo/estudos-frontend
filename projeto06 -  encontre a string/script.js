const filme =  {
    titulo :  "Vingadores",
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
exibirPropriedades(filme)
function exibirPropriedades(obj) {
    for (let chave  in obj) {
         if (typeof obj[chave] ===  'string') {
            console.log(chave, obj[chave])
         
    }
}
}

