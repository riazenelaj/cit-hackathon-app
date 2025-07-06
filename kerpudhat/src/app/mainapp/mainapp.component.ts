import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './mainapp.component.html',
})
export class MainAppComponent {}
