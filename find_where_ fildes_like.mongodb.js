const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);

db[collection].find({"descricao":/crime/i},
                    {"_id":0, "codigo": 0}
);
    