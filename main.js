//Constante do fomulário
const form = document.getElementById('form-deposito')

const inputNomeDoIndividuo = document.getElementById('nome-individuo')
const inputNumeroDoTelefone =  document.getElementById('numero-telefone')

//Armazena as linhas
let linhas = ''

//Armazém dos números colocados
let armazemDeNumeros = []

//Definindo o que deve ocorrer ou clicar no botão submit
form.addEventListener('submit', function(e)
{
    //Evita a ação padrão do botão
    e.preventDefault()

    //Função que cria linhas
    criandoLinha()

    //Função que insere as linhas no HTML
    inserindoLinha()
})

//Função que cria as linhas a partir dos dados coletados
function criandoLinha()
{

    if(armazemDeNumeros.includes(parseInt(inputNumeroDoTelefone.value)))
    {
        alert(`O número de telefone ${inputNumeroDoTelefone.value} já existe!`)
    }
    else
    {
        armazemDeNumeros.push(parseInt(inputNumeroDoTelefone.value))

        let linha = '<tr>'
        linha += `<td><img src="./images/avatar.png" alt="Avatar sem imagem"></td>`
        linha += `<td>${inputNomeDoIndividuo.value}</td>`
        linha += `<td>${inputNumeroDoTelefone.value}</td>`
        linha += '</tr>'
        linhas += linha

        inputNomeDoIndividuo.value = ''
        inputNumeroDoTelefone.value = ''
    }

}

//Função que insere as linhas no HTML
function inserindoLinha()
{
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}