const database= 'bd-eliza-aula';

const collection = 'LIVRARIA';

use(database);


/*seleciona um livro de determinada categoria e valo determinado*/

// db[collection].find({
//     $and:[
//         {categoria:{$eq:'Fantasia Heroica'}},
//         {valor: {$lte:100}}
//     ]
// });

db[collection].find({
    $or:[
        {categoria:{$eq:'Fantasia Heroica'}},
        {valor: {$lte:100}}
    ]
});



    
   