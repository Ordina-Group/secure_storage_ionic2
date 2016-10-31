import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class DatabaseConnectionHolder {
    private _platform: Platform;

    constructor(platform:Platform) {
        this._platform = platform;

        this._platform.ready().then(() => {
            this.getInstance();
        });
    }

    public getInstance(): Promise<any> {
        /**
         * Replace this line with the database creation logic.
         *  
         * 1. Create and return a new Promise using the constructor that takes a function (resolve, reject) => {}
         * 2. Create/Open a database using the sqlitePlugin openDatabase function (Don't forget the key property!)
         */
        return Promise.resolve();
    }
}