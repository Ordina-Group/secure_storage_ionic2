import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Patient } from '../../model';
import { PatientService } from '../../providers';

import { MedicalConsultationPage } from '../medical-consultation';

/*
  Generated class for the Patient page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'patient-page',
  templateUrl: 'patient.html'
})
export class PatientPage implements OnInit {

  public patients: Array<Patient>;
  private _navCtrl: NavController;
  private _patientService: PatientService

  constructor(
    navCtrl: NavController,
    patientService: PatientService) {
      this._navCtrl = navCtrl;
      this._patientService = patientService;
    }

  public ngOnInit() {
      /**
       * Call the patientService and initialize the patients Array.
       * 
       * 1. Call patientService#getAllPatients
       * 2. subscribe to the resulting observable and initialize the patients Array.
       */

      this.patients = new Array;
  }

  public ionViewDidLoad() {
    console.log('Hello Patient Page');
  }

  public patientSelected(patient: Patient):void {
    console.log('Selected a patient: ' + JSON.stringify(patient));
    this._navCtrl.push(MedicalConsultationPage, { 'patient': patient });
  }

}
