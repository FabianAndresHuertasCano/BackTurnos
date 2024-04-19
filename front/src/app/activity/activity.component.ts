import { Component, Input } from '@angular/core';
import { Activity } from 'src/models/Activity';
import { User } from 'src/models/User';
import { BackTurnosService } from 'src/services/back-turnos.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  @Input() user: User = new User();
  activities: Activity[] = [];
  userName = '';
  loading: boolean = false;
  isError: boolean = false;
  errorMessage: string = '';
  constructor(
    private backTurnosService: BackTurnosService
  ){

  }
  ngOnInit(): void {
    this.userName = this.user.name;
    console.log(this.user)
    this.getActivities();
  }
  getActivities(){
    this.loading = true;
    this.isError = false;
    this.backTurnosService.getActivities(this.user.id)
    .subscribe({
      next:(data) => {
        this.loading = false;
        console.log(data);
        this.activities = data;
      },
      error:(error) => {
        this.loading = false;
        this.isError = true;
        this.errorMessage = error.message;
      }
    })
  }
}
