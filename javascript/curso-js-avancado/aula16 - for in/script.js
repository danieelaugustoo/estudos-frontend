// for in

const pessoa = {
    nome: 'Daniel',
    idade: 17
}
// key-value -> valor da chave
for( let chave in pessoa) {
    console.log(chave, pessoa.nome, pessoa.idade)
}

const cores =['Vermelho', 'Azul', 'Verde'];

for (let indice in cores) {
    console.log(indice, cores[indice])
}