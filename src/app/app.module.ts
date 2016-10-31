import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { PatientPage } from '../pages/patient/patient';
import { MedicalConsultationPage } from '../pages/medical-consultation/medical-consultation';

import { 
  DatabaseConnectionHolder, 
  FirstStartupService,
  PatientService 
} from '../providers';

import '../providers/rx-operators';

@NgModule({
  declarations: [
    MyApp,
    PatientPage,
    MedicalConsultationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PatientPage,
    MedicalConsultationPage
  ],
  providers: [
    DatabaseConnectionHolder,
    FirstStartupService,
    PatientService
  ]
})
export class AppModule {}
