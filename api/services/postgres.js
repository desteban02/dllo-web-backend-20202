const {Pool} = require("pg");

class servicePostgres{

    constructor(){
      this.Pool = new Pool({
          user: "a",
          host: "b",
          database:"",
          password:""
      })
    }
}