const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);



db[collection].find(
  {valor: {$gte:100, $lte:150}}
    )