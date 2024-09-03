const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);


db[collection].deleteMany(
    {autor:'Isaac Asimov'}
)