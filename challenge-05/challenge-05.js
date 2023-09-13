/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [1, 2, 3, 4, 5];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArr(arr) {
  return [1, 2, 3];
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
function myArr(arr) {
  return [1, 2, 3];
};
console.log(myArr()[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function parametros() {
... return {
... param1: [1, 2, 3],
... param2: 2
... }
... };
parametros().param1[2] //3

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var myVar = [1, 'Caio', true, {}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

function parametros() {
... return myVar;
... }
parametros()

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeDoLivro) {
    var obj = {
      livro1: {
        quantidadePaginas: 100,
        autor: 'Caio Camizão',
        editora: 'Nova Legião'
      },
      livro2: {
        quantidadePaginas: 50
        autor: 'Cauã Camizão',
        editora: 'Nova Editora'
      },
      livro3: {
        quantidadePaginas: 283,
        autor: 'Vincenzo Milhomem Spoli Camizão,
        editora: 'Nova Era'
      }
};
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
