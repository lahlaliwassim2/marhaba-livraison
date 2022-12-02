const Role = require('./Role')

Role.estimatedDocumentCount((err, count) => {
    if (!err && count != 3) {
        Role.findOne({name: 'manager'})
            .then((e)=>{
                if(!e){
                    new Role({
                        name: "manager"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'manager' added to roles collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })

        Role.findOne({name: 'livreur'})
            .then((e)=>{
                if(!e){
                    new Role({
                        name: "livreur"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'livreur' added to roles collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })

        Role.findOne({name: 'client'})
            .then((e)=>{
                if(!e){
                    new Role({
                        name: "client"
                    })
                    .save(err => {
                        if(err) {console.log("error", err)}
                        console.log("'client' added to roles collection");
                    });
                }
            })
            .catch((error)=>{ console.log(error) })
    }
});