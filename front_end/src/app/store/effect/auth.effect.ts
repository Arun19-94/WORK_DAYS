
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import {
    GetUsersSuccess,
    EUserActions,
    GetUserSuccess,
    GetUser,
    GetUsers
  } from '../action/auth.action';

  import { AuthService } from 'src/app/service/auth.service';
  import { User } from 'src/app/model/user.model'; 
import { selectSelectedUser } from '../selector/auth.selector';

  @Injectable()
export class AuthEffects {
  constructor(
    private _userService: AuthService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
  // @Effect()
  // getUser$ = this._actions$.pipe(
  //   ofType<GetUser>(EUserActions.GetUser),
  //   map(action => action.payload),
  //   // withLatestFrom(this._store.pipe(select(selectSelectedUser))),
  //   switchMap(( user: User) => {
  //   //   const selectedUser = user.filter(use => use.id === +id)[0];
  //     return of(new GetUserSuccess(user));
  //   })
  // );

  // @Effect()
  // getUsers$ = this._actions$.pipe(
  //   ofType<GetUsers>(EUserActions.GetUsers),
  //   switchMap(() => this._userService.currentUser("aa")),
  //   switchMap((userHttp: User) => of(new GetUsersSuccess(userHttp)))
  // );

  
}
