const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',         
    host: 'localhost',        
    database: 'sports', 
    password: 'satish',    
     port: 5432,            
        
});

module.exports = pool;