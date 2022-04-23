import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', attribute : when 'app-servers' is an attribute
  //selector: '.app-servers',  class     : when 'app-servers' is a class in a div
  selector: 'app-servers',
  // template: ` <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowedNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver1', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
