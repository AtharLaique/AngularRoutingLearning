import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
//Adding here
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  //injecting here
  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    //receiving here
    console.log( this.route.snapshot.queryParams)
    console.log( this.route.snapshot.fragment)
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
