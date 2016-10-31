import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { FirstStartupService } from '../providers';

import { PatientPage } from '../pages/patient';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp implements OnInit {
  rootPage = PatientPage;

  private _platform: Platform;
  private _firstStartupService: FirstStartupService;

  constructor(platform: Platform,
    firstStartupService: FirstStartupService) {
    this._platform = platform;
    this._firstStartupService = firstStartupService;
  }

  public ngOnInit() {
    this.initializeApp();
  }

  private initializeApp(): void {
    this._platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      //Check through FirstStartupService whether or not the app is being started for the first time.
      //On first startup, we'll create the database schema.
      this._firstStartupService.isFirstStartup()
          .then((isFirstStartup: boolean) => {
              if(isFirstStartup) {
                  this._firstStartupService.createDatabase();
              }

              return Promise.resolve(isFirstStartup);
          })
          .then((isFirstStartup: boolean) => {
              console.log('Database successfully created');
              
              console.log('dummyData inserted' + isFirstStartup);
              this._firstStartupService.insertDummyData();
          });

    });
  }
}
