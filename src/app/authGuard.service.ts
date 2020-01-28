//step 0: import canActivate interface
import { 
    CanActivate ,
    ActivatedRouteSnapshot ,
    RouterStateSnapshot ,
    Router} 
from "@angular/router";

//Step 1: import observable to make canActive sync or async
import {Observable} from 'rxjs/Observable'
//Step 2 : import Auth service
import {AuthService} from './auth.service';
//Step 3: import injectable to inject this service
import {Injectable} from '@angular/core'
//Step 4.1 inject the service
@Injectable()
export class AuthGuard implements CanActivate{
    //Step 4.2 inject the service
    constructor(private auth:AuthService,private router:Router){}

    //Step5 provide implementation of canActive
    //(takes tow arguments)
    //:Observable
    canActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{

          //use Auth service to know user loggin or not
          //and we use promice here becauuse our auth service return the promise
         return this.auth.Authuntecate()
          .then(
              (authuntecated:boolean)=>{
                  if(authuntecated===true){
                      //if authuntecated then user can access the route
                    return authuntecated;
                  }
                  else{
                      //if not authentecated then navigate
                      this.router.navigate(['/'])
                  }
                 
              }
          )
        return true;
    }
    
}