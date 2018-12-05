import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private settings: any = {};

  constructor(private router: Router) {


    const Store = require('electron-store');
    const store = new Store();

    let appSettings = store.get('appSettings');
    let mysql = require('mysql');

    this.settings.labID = appSettings.labID;
    this.settings.labName = appSettings.labName;

    this.settings.rocheMachine = appSettings.rocheMachine;
    this.settings.rochePort = appSettings.rochePort;
    this.settings.rocheHost = appSettings.rocheHost;
    this.settings.rocheConnectionType = appSettings.rocheConnectionType;

    this.settings.mysqlHost = appSettings.mysqlHost;
    this.settings.mysqlPort = appSettings.mysqlPort;
    this.settings.mysqlDb = appSettings.mysqlDb;
    this.settings.mysqlUser = appSettings.mysqlUser;
    this.settings.mysqlPassword = appSettings.mysqlPassword;

    // console.log("====================");
    // console.log(this.settings.mysqlDb);
    // console.log("====================");

    

  }

  ngOnInit() {
  }

  updateSettings() {

    let appSettings = {
      labID: this.settings.labID,
      labName: this.settings.labName,
      rochePort: this.settings.rochePort,
      rocheMachine: this.settings.rocheMachine,
      rocheHost: this.settings.rocheHost,
      rocheConnectionType: this.settings.rocheConnectionType,
      mysqlHost: this.settings.mysqlHost,
      mysqlPort: this.settings.mysqlPort,
      mysqlDb: this.settings.mysqlDb,
      mysqlUser: this.settings.mysqlUser,
      mysqlPassword: this.settings.mysqlPassword,
    }
    const Store = require('electron-store');
    const store = new Store();

    store.set('appSettings', appSettings);

    let myNotification = new Notification('Success', {
      body: 'Updated VLSM interfacing settings'
    })

    this.router.navigate(['/dashboard']);


  }

}
