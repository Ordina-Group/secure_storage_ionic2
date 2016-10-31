import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DatabaseConnectionHolder } from './database-connection.holder'
import { MedicalConsultation, Patient } from '../model';

@Injectable()
export class PatientService {

    private _databaseConnectionHolder: DatabaseConnectionHolder;

    constructor(databaseConnectionHolder: DatabaseConnectionHolder) {
        this._databaseConnectionHolder = databaseConnectionHolder;
    }

    public getAllPatients(): Observable<Patient> {
        /**
         * Write the getAllPatients logic.
         * 
         * 1. Create and return a new Promise using the constructor that takes a function (resolve, reject) => {}
         * 2. Get an instance of our databaseConnection through the _dbConnectionHolder.getInstance() function which returns a promise with the resolved db connection
         * 3. Execute the FIND_ALL_PATIENT_QUERY. Do this by using the db.transaction and tx.executeSql functions. Don't forget to foresee values for the ?-placeholders!!
         */
        return Observable.empty();
    }

    public getMedicalConsultationsByPatient(patient: Patient): Observable<MedicalConsultation> {
        /**
         * Write the getAllPatients logic.
         * 
         * 1. Create and return a new Promise using the constructor that takes a function (resolve, reject) => {}
         * 2. Get an instance of our databaseConnection through the _dbConnectionHolder.getInstance() function which returns a promise with the resolved db connection
         * 3. Execute the FIND_MEDICAL_CONSULTATIONS_BY_PATIENT_ID_QUERY. Do this by using the db.transaction and tx.executeSql functions. Don't forget to foresee values for the ?-placeholders!!
         */
        return Observable.empty();
    }   
}