import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DatabaseConnectionHolder } from './database-connection.holder'
import { MedicalConsultation, Patient } from '../model';
import { DbQueries } from './db-queries';

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
        let allPatientsPromise: Promise<Array<Patient>> = new Promise((resolve, reject) => {
            this._databaseConnectionHolder.getInstance().then((db: any) => {
                db.executeSql(DbQueries.FIND_ALL_PATIENT_QUERY, [], (rs) => {
                    let patients: Array<Patient> = new Array();

                    if(rs.rows!.length! > 0) {
                        for(let i = 0; i <= rs.rows.length; i++) {
                            if (typeof rs.rows.item(i) !== 'undefined') {
                                patients.push(this.mapRecordToPatient(rs.rows.item(i)));
                            }
                        }

                        resolve(patients);                        
                    } else {
                        resolve([]);
                    }
                });
            });
        });

        return Observable
            .fromPromise(allPatientsPromise)
            .flatMap((allPatients) => Observable.from(allPatients));
    }

    public getMedicalConsultationsByPatient(patient: Patient): Observable<MedicalConsultation> {
        /**
         * Write the getAllPatients logic.
         * 
         * 1. Create and return a new Promise using the constructor that takes a function (resolve, reject) => {}
         * 2. Get an instance of our databaseConnection through the _dbConnectionHolder.getInstance() function which returns a promise with the resolved db connection
         * 3. Execute the FIND_MEDICAL_CONSULTATIONS_BY_PATIENT_ID_QUERY. Do this by using the db.transaction and tx.executeSql functions. Don't forget to foresee values for the ?-placeholders!!
         */
        let allMedicalConsultationsPromise: Promise<Array<MedicalConsultation>> = new Promise((resolve, reject) => {
            this._databaseConnectionHolder.getInstance().then((db: any) => {
                db.executeSql(DbQueries.FIND_MEDICAL_CONSULTATIONS_BY_PATIENT_ID_QUERY, [patient.patientId], (rs) => {
                    let allMedicalConsultations: Array<MedicalConsultation> = new Array();

                    if(rs.rows!.length! > 0) {
                        for(let i = 0; i <= rs.rows.length; i++) {
                            if(typeof rs.rows.item(i) !== 'undefined') {
                                allMedicalConsultations.push(this.mapRecordToMedicalConsultation(rs.rows.item(i)));
                            }
                        }

                        resolve(allMedicalConsultations);
                    } else {
                        resolve([]);
                    }
                });
            });
        });

        return Observable
            .fromPromise(allMedicalConsultationsPromise)
            .flatMap((allMedicalConsultations) => Observable.from(allMedicalConsultations));
    }

    private mapRecordToPatient(record: any): Patient {
        let patient: Patient = new Patient(record.firstName, record.lastName);
        patient.patientId = record.patientId;

        return patient
    }

    private mapRecordToMedicalConsultation(record: any): MedicalConsultation {
        let medicalConsultation: MedicalConsultation = new MedicalConsultation(record.description, new Date(record.date));
        medicalConsultation.medicalConsultationId = record.medicalConsultationId;

        return medicalConsultation;
    }
}
