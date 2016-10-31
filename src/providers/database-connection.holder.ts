import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

declare let sqlitePlugin:any;

@Injectable()
export class DatabaseConnectionHolder {
    private _db: any;
    private _platform: Platform;

    constructor(platform:Platform) {
        this._platform = platform;

        this._platform.ready().then(() => {
            this.getInstance();
        });
    }

    public getInstance(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this._db === null || typeof this._db === 'undefined') {
                sqlitePlugin.openDatabase({
                    name: 'sensitiveData.db', 
                    key: 'password',
                    location: 'default'
                }, 
                (db) => {
                    this._db = db;
                    resolve(this._db);
                }, 
                (error) => {
                    console.log('Error occured while creating database...' + error);
                    throw(error);
                });
            } else {
                resolve(this._db);
            }
        });    
    }
}