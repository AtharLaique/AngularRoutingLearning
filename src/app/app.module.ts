import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Importing Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

//Step1:import 
import { Routes  ,RouterModule} from '@angular/router';

//Step2:Make Array of routes and pass to the function of RouteModule as peremeter 
const aapRoutes:Routes=
[
 {path:'' ,component:HomeComponent},
 {path:'users' ,component:UsersComponent},
 {path:'user/:id/:name' ,component:UserComponent},
 {path:'server' ,component:ServersComponent} 
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(aapRoutes)//here we are passing our our routes 
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
