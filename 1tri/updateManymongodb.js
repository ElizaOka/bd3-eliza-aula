const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);

/* altera um dos dados de um documento da collection*/
db[collection].updateMany(
    {autor:'O Sol Desvelado'},
    {$set:{autor:'250'}}
);