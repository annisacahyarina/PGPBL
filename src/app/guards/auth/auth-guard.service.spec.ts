import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';
import { Store, StoreModule } from '@ngrx/store';
import { loginReducer } from 'src/store/login/login.reducers';
import { AppState } from '@capacitor/app';
import { loginSuccess } from 'src/store/login/login.actions';
import { Route, Router, RouterModule } from '@angular/router';
import { User } from 'src/app/model/user/User';

describe('AuthGuardService', () => {
  let service: AuthGuard;
  let store: Store<AppState>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        StoreModule.forRoot([]),
        StoreModule.forFeature('login', loginReducer)
      ]
    });
    service = TestBed.inject(AuthGuard);
    store = TestBed.get(Store);
    router = TestBed.get(Router);
  });
  it('should allow logged user to access page', () => {
    store.dispatch(loginSuccess({user: new User()}));

    service.canLoad().subscribe(isAllowed => {
      expect(isAllowed).toBeTruthy();
    })
  });
  it('should not allow access to page if user is not logged in', () => {
    service.canLoad().subscribe(isAllowed => {
      expect(isAllowed).toBeFalsy();
    })
  });
  it('should not allow user be sent to the login page', () => {
    spyOn(router, 'navigateByUrl');

    service.canLoad().subscribe(isAllowed => {
      expect(router.navigateByUrl).toHaveBeenCalledWith('login');
    })
  });
});
