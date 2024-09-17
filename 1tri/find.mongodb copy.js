const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);
/* seleciona o livro com o maior valor*/
db[collection].find(
    {valor:{$gt:125}}
)