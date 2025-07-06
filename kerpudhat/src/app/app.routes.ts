import { Routes } from '@angular/router';
import { WorkComponent } from './mainapp/work/work.component';
import { LoginComponent } from './login/login.component';
import { MainAppComponent } from './mainapp/mainapp.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: MainAppComponent,
    children: [
      {
        path: 'work',
        component: WorkComponent,
      },
    ],
  },
];
