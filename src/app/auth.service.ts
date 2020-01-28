export class AuthService{
    loggedIn=false;
    Authuntecate(){
        const promise=new Promise(
            (resolve, reject)=>{
                setTimeout(()=>{
                    resolve( this.loggedIn);
                },2000)
            }
        )
       return promise;
    }
    loggIn(){
        this.loggedIn=true;
    }
    logout(){
        this.loggedIn=false;
    }
}