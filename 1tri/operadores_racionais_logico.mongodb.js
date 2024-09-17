const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);

// db[collection].find(
// {valor: {$gt:125}}
// )

db[collection].find(
    {valor: {$lte:100}}
    )

