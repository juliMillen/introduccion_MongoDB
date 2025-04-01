// insertOne

var user2 = {
    name: 'Maximiliano',
    last_name: 'Porcel',
    age: 24,
    email:'maxporcel@gmail.com'
}


var user3 = {
    name: 'Braian',
    last_name: 'Romero',
    age: 33,
    email:'romerobraian@gmail.com'
}


var user4 = {
    name: 'Ignacio',
    last_name: 'Sccocco',
    age: 35,
    email:'sccoccoignacio@gmail.com'
}

db.users.insertOne(user2)
db.users.insertMany([user3,user4])

db.users.find(
    {age:33}, //Criterios --> Where
    {name:true , email:true, _id:false} //Select
).pretty()

//$ne -> diferente a 
//$eq -> igual a
//obtenemos todos los usuarios cuya edad sea diferente de 24
db.users.find(
    {
        age: {
            $ne:24
        }
    }
)

//obtenemos todos los usuarios cuya edad sea igual a 24
db.users.find({
    age: {
        $eq:24
    }
 }
).pretty()

//obtener todos los usuarios cuya edad sea mayor a 20
db.users.find(
    {
        age: {
            $gt: 30 // >
        }
    }
)

// obtener todos los usuarios cuya edad sea menor a 30

db.users.find(
    {
        age: {
            $lt:30
        }
    }
)

//obtener todos los usuarios cuya edad sea mayor a 20 y menor a 30
db.users.find({
    $and: [
        {
            age: {$gt:20}
        },
        {
            age: {$lt:30}
        }
    ]
}).pretty()


//obtener todos los usuarios cuyo nombre sea Braian o Ignacio o la edad mayor a 20 y menor a 25
db.users.find(
    {
        $or: [
            {
                name: 'Braian'
            },
            {
                name: 'Ignacio'
            },
            {
                $and: [
                    {
                        age: {$gt:20}
                    },
                    {
                        age: {$lt:25}
                    }
                ]
            }
        ]
    }
).pretty()


//Verificar el email con regex en mongoDB:
db.users.find(
	{
email: /.com$/  
}
)


// Obtener todos los usuarios con atributo estatus (sería como un atributo especial de algunos usuarios)
db.users.find(
    {
        $status: {exists:false}
    }
)

// Para obtener en un archivo largo de datos las edades 27, 40 y 11 ejecutarlo como lista:

db.users.find(
    {
        age: $in[ 27,40, 11]  
    }
);

//  Ejemplo de obtener el usuario de mayor edad y limitar a un solo archivo
db.users.find().sort({
        age: -1
    }
).limit(1)


// - Ejemplo de cómo obtener los 3 usuarios más jóvenes:

db.users.find().sort({
    age: 1
}).limit(3)

//contar la cantidad de archivos en la coleccion
db.users.find().count()

//contar la cantidad de archivos en la coleccion con edad mayor a 27

db.users.find({
    age: {
        $gte:27
    }
}).count()

//saltear archivos

db.users.find().skip(2)


