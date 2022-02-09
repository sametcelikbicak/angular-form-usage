import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title: string = `Angular ${VERSION.major} form usage`;
  public username: string = 'user';
  public email: string;
  public password: string;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.createForm();
  }

  public submitVariables(): void {
    console.log({
      username: this.username,
      email: this.email,
      password: this.password,
    });
  }

  public submitForm(): void {
    console.log(this.form.value);
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      username: this.formBuilder.control('user'),
      email: this.formBuilder.control(''),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
}
