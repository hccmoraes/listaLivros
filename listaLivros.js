//Em uma lista de livros, informe o título e o valor do maisbarato.

//1° passo - faça uma lista (array) com os valores dos livros
const precosLivros = [
    {
        titulo: 'JavaScript',
        valor: 25
    },
    {
        titulo: 'PHP',
        valor: 15
    },    
    {
        titulo: 'Java',
        valor: 30
    }, 
    {
        titulo: 'Elixir',
        valor: 50
    },
    {
        titulo: 'Go',
        valor: 45
    },
    {
        titulo: 'Python',
        valor: 20 
    }
];

//2° crie as váriaveis de apoio para a resolução do problema
let atual = 0;
let maisBarato = 0;

//3° crie um loop para percorrer a lista de preços (array)
for(atual = 0; atual < precosLivros.length; atual++){
    //4° crie um código que informe o valor mais barato
    if(precosLivros[atual] < precosLivros[maisBarato]){
        maisBarato = atual;
    }
}

//chame o resultado para ser exibido
console.log(`O livro mais barato é o ${precosLivros[maisBarato].titulo} e custa ${precosLivros[maisBarato].valor} reais`)