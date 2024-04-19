import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/models/Activity';
import { BackTurnosService } from 'src/services/back-turnos.service';

@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.scss']
})
export class ActivityAddComponent {
  id = 0;
  username = '';
  activity: Activity = new Activity();
  isSuccess: boolean = false;
  isError: boolean = false;
  successMessage: any;
  errorMessage: any;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private backTurnosService: BackTurnosService
    ) {
      this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
      this.username = this.route.snapshot.paramMap.get('username') ?? '';
      console.log(this.id)
      console.log(this.username)
      if(!(this.id > 0) || !this.username){
        this.router.navigate(["/home"]);
      }
      this.activity.idUser = this.id;
    }
    onSubmit(){
      this.isSuccess = false;
      this.isError = false;
      this.backTurnosService.createActivity(this.activity)
      .subscribe({
        next:(data) => {
          this.isSuccess = true;
          this.successMessage = data.message;
        },
        error:(error) => {
          console.error(error)
          this.isError = true;
          this.errorMessage = error.message;
        }
      })
    }
}
