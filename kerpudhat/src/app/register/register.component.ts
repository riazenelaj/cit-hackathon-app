import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  async register() {
    console.log(this.registerForm.value);
    try {
      const data = await firstValueFrom(
        this.apiService.register({
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
          username: this.registerForm.value.email,
        })
      );
      localStorage.setItem('token', data.access);
      this.router.navigate(['/app']);
    } catch (error) {
      console.log(error);
    }
  }
}
