const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);

db[collection].find({"categoria": "Ficção Científica"},
                    {"_id":0, "codigo": 0}
);
    