const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);

/* altera um dos dados de um documento da collection*/
db[collection].updateOne(
    {titulo:'O Sol Desvelado'},
    {$set:{valor:'250'}}
);