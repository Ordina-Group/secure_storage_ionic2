import { Injectable } from '@angular/core';

import { DatabaseConnectionHolder } from './database-connection.holder';
import { DbSchema } from './db-schema';
import { DbQueries } from './db-queries';

@Injectable()
export class FirstStartupService {

    private _dbConnectionHolder: DatabaseConnectionHolder;

    constructor(dbConnectionHolder: DatabaseConnectionHolder) {
        this._dbConnectionHolder = dbConnectionHolder;
    }

    public isFirstStartup(): Promise<boolean> {
        /**
         * Check whether this is the first startup of the app ever.
         * This is necessary to run the db-schema creation logic
         * 
         * 1. Create and return a new Promise using the constructor that takes a function (resolve, reject) => {}
         * 2. Get an instance of our databaseConnection through the _dbConnectionHolder.getInstance() function which returns a promise with the resolved db connection
         * 3. execute the DbQueries.DB_INITIALIZED_QUERY query using the executeSql function on our db connection object
         * 4. Resolve the promise with true or false depending on the result of the query
         */
        return Promise.resolve(true);
    }

    public createDatabase(): Promise<any> {
        /**
         * Create the database schema
         * 
         * 1. Create and return a new Promise using the constructor that takes a function (resolve, reject) => {}
         * 2. Get an instance of our databaseConnection through the _dbConnectionHolder.getInstance() function which returns a promise with the resolved db connection
         * 3. execute the DbSchema queries all at once using the sqlBatch function
         * 4. Resolve or reject the promise without any data depending on the result of our queries
         */
        return Promise.resolve();
    }
}