import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { LoginServiceService } from '../../../services/auth/login-service.service';
import { AuthenticationRequest } from '../../../models/AuthenticationRequest';
import { JwtDTO } from '../../../models/JwtDTO';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:  [ LoginServiceService ]
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginServiceService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getControl(controlName: string): FormControl {
    return this.loginForm.get(controlName) as FormControl;
  }

  get username() {
    return this.getControl('username');
  }

  get password() {
    return this.getControl('password');
  }

  login() {
    if (this.loginForm.valid) {
      let authenticationRequest = new AuthenticationRequest(this.username.value, 
                                                            this.password.value)
      
      this.loginService.authenticate(authenticationRequest).subscribe({
        next: (response:JwtDTO) => {
          this.loginError = false;
          let token: string = response.jwt;
          let username: string = response.username;

          sessionStorage.setItem('username', username);
          sessionStorage.setItem('isLogged', "true");
        },
        error: (error) => {
          this.loginError = true;
          console.error('Ocurrió un error al iniciar la sesión: ', error);
        },
        complete: () => {
          this.loginForm.reset();
          this.router.navigateByUrl('/inicio');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
