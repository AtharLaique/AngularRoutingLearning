import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//import AuthGuard services
import {AuthGuard} from './authGuard.service';

//Step1:import 
import { Routes  ,RouterModule} from '@angular/router';
//Step2:Make Array of routes and pass to the function of RouteModule as peremeter 
const aapRoutes:Routes=
[
 {path:'' ,component:HomeComponent},
 {path:'users' ,component:UsersComponent, children:[
  {path:':id/:name' ,component:UserComponent},
 ]},
 {path:'servers' ,canActivate:[AuthGuard],component:ServersComponent ,children:[
  {path: ':id/edit' , component:EditServerComponent},
  {path: ':id' , component:ServerComponent}
 ]},
  {path:'page-not-found',component:PageNotFoundComponent},
  {path:'**',redirectTo:'page-not-found'}
]

@NgModule({
    imports:[
        RouterModule.forRoot(aapRoutes)
    ],
    exports:[RouterModule]
    //make Route module accessable for app.module.ts
})

export class AppRoutingModule{

}