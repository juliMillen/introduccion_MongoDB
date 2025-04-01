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