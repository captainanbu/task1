const {
    createpool
} =require('mysql');

const pool=createpool({
    host:"localhost:3306/new",
    user:"91908",
    password:"anbu***24",
    database:"new",
    connectionlimit:10
})

pool.query('select * from old',(err,result,fields)=> {
    if (err) {
        return console.log(err);
 }
 return console.log(result);
})

