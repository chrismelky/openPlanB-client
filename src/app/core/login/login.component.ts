import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private authServce: AuthService) {}

  onSubmit() {
    this.authServce.login(this.loginForm.value);
  }
}
