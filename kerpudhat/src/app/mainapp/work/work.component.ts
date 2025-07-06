import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewJobComponent } from './new-job/new-job.component';
import { ApiService } from '../../api.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, NewJobComponent],
  templateUrl: './work.component.html',
})
export class WorkComponent {
  works: any = [];
  newJobModal = false;
  title = 'Work';

  constructor(private apiService: ApiService) {
    this.getJobs();
  }

  async getJobs() {
    try {
      const data = await firstValueFrom(this.apiService.getJobs());
      this.works = data;
    } catch (error) {
      alert(error);
    }
  }

  async createJob() {}

  closeEvent(refresh: boolean) {
    this.newJobModal = false;
    if (refresh) this.getJobs();
  }
}
