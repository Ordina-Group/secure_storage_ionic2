import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PatientService {

    constructor() {

    }

    public getAllPatients(): Observable<any> {
        return Observable.of(null);
    }
}