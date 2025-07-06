import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-new-job',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new-job.component.html',
})
export class NewJobComponent {
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  jobForm: FormGroup;

  constructor(private apiService: ApiService) {
    this.jobForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
    });
  }

  submit() {
    console.log(this.jobForm.value);
    this.apiService.createJobs(this.jobForm.value).subscribe((data) => {
      console.log(data);
      this.close(true);
    });
  }
  close(refresh = false) {
    this.closeEvent.emit(refresh);
  }
}
