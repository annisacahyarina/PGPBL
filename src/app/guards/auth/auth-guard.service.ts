import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap, take } from 'rxjs';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from 'src/store/login/LoginState';

const selectLoginState = createFeatureSelector<LoginState>('login');

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private store: Store<AppState>, private router: Router) { }

  canLoad() : Observable<boolean> {
    return this.store.select(selectLoginState).pipe(
      take(1),
      switchMap(loginState => {
        if (loginState?.isLoggedIn) {
          return of(true);
        }
        this.router.navigateByUrl('login');
        return of(false);
      })
    );
}
}
