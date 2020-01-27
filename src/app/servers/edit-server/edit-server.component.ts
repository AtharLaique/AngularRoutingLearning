import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
//Adding here
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;

  //injecting here
  constructor(private serversService: ServersService,private route:ActivatedRoute) { }

  ngOnInit() {
    
    //receiving here
    this.allowEdit=+this.route.snapshot.queryParams['allowEdit']=== 1 ?true:false;
   
    //For Reactive change
    this.route.queryParams.subscribe(
      (queryParams:Params)=>{
        this.allowEdit=+queryParams['allowEdit']=== 1 ?true:false;
      }
    )


    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
