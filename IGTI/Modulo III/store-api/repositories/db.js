import pg from 'pg'

async function connect(){
    if(global.connection){
        return global.connection.connect();
    }
    
    const pool = new pg.Pool({
        connectionString: "postgres://yqfdkaze:dUUVVfUxh_nD_UIzisB_Lr544n-1pD0j@tuffi.db.elephantsql.com/yqfdkaze"
        
    })
    global.connection = pool;
    return pool.connect();
}

export {
    connect
}