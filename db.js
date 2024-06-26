const { Client } = require("pg");

    const client = new Client({
      user: "postgress",
      host: "localhost",
      database: "schoolmanagment",
      password: "root",
    });

     client.connect();

     module.exports=client;

