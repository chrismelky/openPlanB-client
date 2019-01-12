import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginError: string;

  loginForm = this.fb.group({
    userName: [null, Validators.required],
    password: [null, Validators.required]
  });

  constructor(private fb: FormBuilder, private authServce: AuthService) {
    authServce.getLoginError().subscribe((message) => {
      this.loginError = message;
    });
  }

  onSubmit() {
    this.authServce.login(this.loginForm.value);
  }
}
