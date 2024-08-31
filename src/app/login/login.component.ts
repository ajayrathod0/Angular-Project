import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;
    if (username === 'admin@gmail.com' && password === '12345678') {
      this.router.navigate(['/admin/dashboard']);
    } else if (username === 'user@gmail.com' && password === '12345678') {
      this.router.navigate(['/user/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
