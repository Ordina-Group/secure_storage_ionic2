import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MedicalConsultation, Patient } from '../../model';
import { PatientService } from '../../providers';

/*
  Generated class for the MedicalConsultation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'medical-consultation-page',
  templateUrl: 'medical-consultation.html'
})
export class MedicalConsultationPage implements OnInit {

  public medicalConsultations: Array<MedicalConsultation>;

  private _patientService: PatientService;
  private _patient: Patient;

  constructor(public navCtrl: NavController,
      patientService: PatientService,
      navParams: NavParams) {
      this._patientService = patientService;
      this._patient = navParams.get('patient');

      console.log('patient: ' + JSON.stringify(navParams.get('patient')));
  }

  ionViewDidLoad() {
      console.log('Hello MedicalConsultation Page');
  }

  public ngOnInit() {
      /**
       * Call the patientService and initialize the medicalConsultations Array.
       * 
       * 1. Call patientService#getMedicalConsultationsByPatient and supply the patient we've received through the NavParams (See constructor)
       * 2. subscribe to the resulting observable and initialize the medicalConsultations Array.
       */

      this.medicalConsultations = new Array;
  }

}
