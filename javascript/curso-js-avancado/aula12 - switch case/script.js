let permissao; // comum, gerente, diretor
permissao = 'comum'

switch (permissao) {
    case 'Comum', 'COMUM', 'comum':
    console.log('Usuário comum')
    break

    case 'Gerente', 'GERENTE', 'gerente':
    console.log('Usuário comum')
    break

    case 'Diretor', 'DIRETOR', 'diretor':
    console.log('Usuário comum')
    break

    default: 
    console.log("Usuário não identificado")
}