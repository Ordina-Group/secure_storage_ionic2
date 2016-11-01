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
    
      this._patientService.getMedicalConsultationsByPatient(this._patient)
          .toArray()
          .subscribe((allMedicalConsultations) => {
              this.medicalConsultations = allMedicalConsultations;
          });
  }

}
