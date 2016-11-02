import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import sjcl from 'sjcl';

declare let sqlitePlugin:any;
declare let SecureStorage:any;
//declare let sjcl: any;

@Injectable()
export class DatabaseConnectionHolder {
    private _db: any;
    private _platform: Platform;
    private _randomGenerator: any;
    private _secureStorage: any;

    constructor(platform:Platform) {
        this._platform = platform;
        this._randomGenerator = sjcl.random;
    }

    public getInstance(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this._db === null || typeof this._db === 'undefined') {
                let databasePasswordPromise = this.getDatabasePassword();

                databasePasswordPromise.then((password) => {

                    console.log('Created password: ' + password + 'before db creation');

                    sqlitePlugin.openDatabase({
                        name: 'sensitiveData.db', 
                        key: password,
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
                });
            } else {
                resolve(this._db);
            }
        });    
    }

    private getDatabasePassword(): Promise<string> {
        return this.createSecureStorage()
            .then(() => {
                return this.getExistingDatabasePassword();
            })
            .then((dbPassword) => {
                if(!dbPassword) {
                    let newDbPassword: any = this.createRandomIdentifier();

                    this.setDatabasePassword(newDbPassword);

                    return newDbPassword;
                } else {
                    return dbPassword;
                }
            });
    }

    private createSecureStorage(): Promise<any> {
        /**
         * Implement the createSecureStorage function.
         * 
         * 1. Create a promise using the constructor that takes an (reject, resolve) => {} arrow function
         * 2. Create a namespaced SecureStorage object. This is required in order to be able to get and set values in SecureStorage. Tip, use the SecureStorage constructor function.
         * 3. resolve and reject in the success and error callbacks respectively
         * 
         */

        return new Promise((resolve, reject) => {
            this._secureStorage = new SecureStorage(
                () => {
                    console.log('succesfully created secureStorage');
                    resolve();
                },
                (error) => {
                    console.log('Error creating secureStorage: ' + error)
                    reject();
                },
                'sensitive_data'
            );
        });
    }

    private getExistingDatabasePassword(): Promise<string> {
        return new Promise((resolve, reject) => {
            this._secureStorage.get(
                (value) => {
                    console.log('succesfully retrieved db_password from secureStorage: ' + value);
                    resolve(value);
                },
                (error) => {
                    console.log('Error retrieving value from secureStorage: ' + error);
                    resolve(undefined);
                },
                'db_password'
            );
        });
    }

    private setDatabasePassword(databasePassword: string): void {
        this._secureStorage.set(
            () => console.log('succesfully set db_password in secureStorage'),
            (error) => console.log('Error setting db_password secureStorage: ' + error),
            'db_password', databasePassword
        );
    }

    //createRandomIdentifier function creates a random base64 44-character password using sjcl (Stanford Javascript Crypto Library).
    private createRandomIdentifier(): string {
        //Generate randomWords (8 x 4 bytes = 256 bit)
        let words = this._randomGenerator.randomWords(8);

        //Base64 the resulting words array
        let randomString = sjcl.codec.base64.fromBits(words);

        return randomString;
    }
}