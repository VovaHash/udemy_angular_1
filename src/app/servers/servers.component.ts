import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  buttonStatus = 'Wait a little';



  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.buttonStatus = 'Add a server';
    }, 2000);
  }



  ngOnInit(): void {}

  onCreateServer() {
    if (this.serverName == '') {
      this.serverCreationStatus =
        'Can not create a new server without a name. Please enter a name for the server.';
    } else {
      this.serverCreationStatus =
        'Server was created. Name is ' + this.serverName;
    }
  }
}
