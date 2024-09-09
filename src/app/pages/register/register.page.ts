import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPageForm } from './form/register.page.form';
import { FormBuilder } from '@angular/forms';
import { AppState } from 'src/store/AppState';
import { UserRegister } from 'src/app/model/user/UserRegister';
import { Store } from '@ngrx/store';
import { RegisterState } from 'src/store/register/RegisterState';
import { hide, show } from 'src/store/loading/loading.actions';
import { ToastController } from '@ionic/angular';
import { register } from 'src/store/register/register.actions'; // Import action register
import { login } from 'src/store/login/login.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {

  registerForm!: RegisterPageForm;
  registerStateSubscription!: Subscription;

  constructor(private router: Router, private formBuilder: FormBuilder, private store: Store<AppState>,
    private toastController: ToastController) {}

  ngOnInit() {
    this.createForm();

    this.watchingRegisterState();
  }

  ngOnDestroy(): void {
    this.registerStateSubscription.unsubscribe();
  }

  register(){
    this.registerForm.getForm().markAllAsTouched();

    if (this.registerForm.getForm().valid){
      this.store.dispatch(register({userRegister: this.registerForm.getForm().value}));
    }

  }

  private createForm() {
    this.registerForm = new RegisterPageForm(this.formBuilder);
  }

  private watchingRegisterState() {
    this.registerStateSubscription = this.store.select('register').subscribe(state => {
      this.toggleLoading(state);

      this.onRegistered(state);
      this.onError(state);



    })
  }

  private onRegistered(state: RegisterState) {
    if (state.isRegistered) {
      this.store.dispatch(login({
        email: this.registerForm.getForm().value.email,
        password: this.registerForm.getForm().value.password
      }))
    }
  }

  private onError(state: RegisterState) {
    if (state.error){
      this.toastController.create({
        message: state.error.message,
        duration: 5000,
        header: 'Registration not done'
      }).then(toast => toast.present());
    }
  }

  private toggleLoading(state: RegisterState) {
    if (state.isRegistering){
      this.store.dispatch(show());
    }else {
      this.store.dispatch(hide());
    }
  }

}

