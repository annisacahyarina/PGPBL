import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm {
  private formBuilder: FormBuilder;

  constructor(formBuilder: FormBuilder){
    this.formBuilder = formBuilder;

  }

  createform() : FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]

    });
  }
}
