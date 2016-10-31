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
        return new Promise((resolve, reject) => {
            this._dbConnectionHolder.getInstance().then((db: any) => {
                db.executeSql(DbQueries.DB_INITIALIZED_QUERY, {}, (rs) => {
                    let name: string = undefined;

                    if (rs.rows!.length! > 0) {
                        name = rs.rows.item(0).name;
                    }

                    resolve(name === null || typeof name === 'undefined');
                });
            });
        });
    }

    public createDatabase(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._dbConnectionHolder.getInstance()
                .then((db: any) => {
                    return db.sqlBatch([
                        DbSchema.CREATE_TABLE_DB_VERSION,
                        DbSchema.CREATE_TABLE_PATIENT,
                        DbSchema.CREATE_TABLE_MEDICAL_CONSULTATION
                    ],
                    () => resolve(),
                    (error) => reject());
                });
        });
    }
}