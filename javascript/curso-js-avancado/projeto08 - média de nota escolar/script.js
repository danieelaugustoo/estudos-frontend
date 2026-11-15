const array = [100, 90, 80]

console.log(mediaDoAluno(array))

function mediaDoAluno(array) {
    let soma = 0
    for (let valor of array) {
        soma += valor
    }
    const media = soma / (array.length)
    if (media <= 59) return 'F'
    if (media <= 69) return 'D'
    if (media <= 79) return 'C'
    if(media <=89) return 'B'
    return 'A'
    
}