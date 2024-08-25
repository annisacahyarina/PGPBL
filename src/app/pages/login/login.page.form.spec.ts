import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";

describe('LoginPageForm', () => {

  let LoginPageForm: any;
  let form: FormGroup;

  beforeEach(() =>{
     LoginPageForm = new LoginPageForm(new FormBuilder());
     form = LoginPageForm.createform();
  })

  it('should create login form empty', () => {
    expect(form).not.toBeNull();
    expect(form.get('email')).not.toBeNull();
    expect(form.get('email')?.value).toEqual("");
    expect(form.get('email')?.valid).toBeFalsy();
    expect(form.get('password')?.value).not.toBeNull();
    expect(form.get('password')?.value).toEqual("");
    expect(form.get('password')?.valid).toBeFalsy();
  })

  it('should gave email invalid if email is not valid', () => {
    form.get('email')?.setValue('invalid email');

    expect(form.get('email')?.valid).toBeFalsy();
  })

  it('should have email valid if email is valid', () => {
    form.get('email')?.setValue('valid(gmail.com');

    expect(form.get('email')?.valid).toBeTruthy();
  })

  it('should have a valid form', () => {
    form.get('email')?.setValue('valid@gmail.com');
    form.get('password')?.setValue('anyPAssword');

    expect(form.valid).toBeTruthy();
  })

})
