import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userData: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth) { 
    this.userData = angularFireAuth.authState;
  }

 async signIn(email: string, password: string) {
    var isSignedIn = false; 
    await this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!', res);
        isSignedIn = true;
        localStorage.setItem("uid", (res.user!.uid).toString());
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
    return isSignedIn;
  }

  signOut(){
    this.angularFireAuth
    .signOut();
    localStorage.removeItem("uid");
    location.reload();
  }
}
