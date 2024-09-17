const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);

/*lista em ordem crecscente*/

// db[collection].find({
//     autor:'J.R.R Tolkien'

// }).sort({valor:1});

db[collection].find({
    autor:'J.R.R Tolkien'

}).sort({valor:-1});
  
   