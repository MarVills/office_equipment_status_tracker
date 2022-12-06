import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import * as authActions from './auth.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AccountCredentials } from 'src/app/Models/manage-account.model';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private routes: Router,
    private angularFireAuth: AngularFireAuth,
    private sharedService: SharedService,
    private http: HttpClient
  ) {}

  loginEFFECT$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.requestAuthLogin),
      // switchMap((response: any) => {
      //   return this.angularFireAuth
      //     .signInWithEmailAndPassword(
      //       response.payload.email,
      //       response.payload.password
      //     )
      //     .then((res) => {
      //       localStorage.setItem('uid', res.user!.uid);
      //       const signInDetails = {
      //         signedIn: true,
      //         uid: res.user?.uid,
      //       };
      //       this.routes.navigate(['/dashboard']);
      //       return authActions.successAuthLogin({ payload: signInDetails });
      //     });
      // }),

      switchMap((response: any) => {
        return this.http
          .post(
            'http://cyber-assets.janreygroup.site/api/auth/login',
            response.payload
          )
          .pipe(
            switchMap((response:any) => {
              // console.log('login resposne', response.access_token);
              const res = response as Map<string ,string>
              // console.log('see values', typeof(response) );
               localStorage.setItem('access_token', response.access_token);
               this.routes.navigate(['/dashboard']);
              return [authActions.successAuthLogin({ payload: response })];
            }),
            catchError((error) => {
              this.sharedService.openSnackBar(error.message);
              return of(authActions.authFailure(error));
            })
          );
      })
    )
  );

  logoutEFFECT$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.requestAuthLogout),
      // switchMap((payload: any) => {
      //   return this.angularFireAuth.signOut().then((res) => {
      //     localStorage.removeItem('uid');
      //     location.reload();
      //     return authActions.successAuthLogout();
      //   });
      // }),

      switchMap((payload: any) => {
        return this.http.post(
          'http://cyber-assets.janreygroup.site/api/auth/logout',{}
        ).pipe(
          switchMap((response)=>{
            console.log("logout response", response)
            return [authActions.successAuthLogout()];
          }),
          catchError((error) => {
            return of(authActions.authFailure(error));
          })
        );
      }),
    )
  );
}
