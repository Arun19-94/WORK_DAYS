import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store , select} from '@ngrx/store';
import { User } from '../model/user.model';
import { catchError, map, Observable, tap } from 'rxjs';
import { selectSelectedUser } from '../store/selector/user.selector';
import { GetUsers } from '../store/action/user.action';
import { IAppState } from '../store/state/app.state';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users$ = this.store.pipe(select(selectSelectedUser));
  data: any
  constructor(private fb: FormBuilder, private router: Router, private readonly store: Store<IAppState>, private authService: AuthService) {
    this.loginForm = this.fb.group({
      // userName: ['', Validators.email],
      userName: [],
      // password: ['', Validators.required ]
      password: []
     })
  }

  ngOnInit(): void {
  
  }
  onSubmit() {
    console.warn("rsssssssssssssssses---------------")
    console.warn(this.loginForm)
    this.store.dispatch(new GetUsers(this.loginForm.value));
    this.users$ = this.store.pipe(select(selectSelectedUser));
    console.warn("user")

    console.warn(this.users$)
    this.users$.subscribe(data => {
      console.warn("1111111111111")
        console.warn(data)
      // Handle the data from the API
    });
    // TODO: Use EventEmitter with form value
    // let user: User ={ "_id": "123",
    // "name": "A_Name",
    // "email": "no_mail@gmail.com",
    // "role": "admin",
    // "current_role": "user",
    // "photoUrl": "asdd"}
    // console.warn("-------------")
    // this.authService.currentUser("aass").pipe(
    //   tap(res => {
    //     console.warn("res")
    //     console.warn(res)
    //     return res;
    // }),catchError((error) => {
    //     console.warn("error")
    //     console.warn(error)
    //     return error;
    //   })

    // )
    
    
    // // console.log(this.loginForm)
    // console.warn(this.loginForm.value);

  }
 
  validatePassword() {

  }

}
