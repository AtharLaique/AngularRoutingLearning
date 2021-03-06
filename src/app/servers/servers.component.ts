import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  queryParam:string;
  fragment:string;
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService ,
              private router:Router ,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
   
  }

  loadRelative(){
    this.router.navigate(['server'],{relativeTo:this.route})
  }

}
