import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordValidator
      ]],
      confirmPassword: ['', Validators.required],
      contact: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      gender: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }

  passwordValidator(control: any) {
    const value = control.value;
    if (!/[A-Z]/.test(value)) return { noUppercase: true };
    if (!/[a-z]/.test(value)) return { noLowercase: true };
    if (!/[0-9]/.test(value)) return { noNumber: true };
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) return { noSpecialChar: true };
    return null;
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      alert(`Ragister Successfull...`);
      this.router.navigate(['/login']);
    }
  }
}
