const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);


db[collection].deleteOne(
    {codigo:'9'}
)