let anoAtual = Number(prompt("Qual é o ano atual"))
let nasc = Number(prompt("Digite o ano do seu nascimento"))
let idade = anoAtual-nasc

if (idade>=18) {
    alert("Apto para votar")   
}else{
    alert("Não está apto para votar")
}