import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/models/Activity';
import { BackTurnosService } from 'src/services/back-turnos.service';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.scss']
})
export class ActivityEditComponent {
  id = 0;
  activity: Activity = new Activity();
  loading: boolean = false;
  isError: boolean = false;
  isSuccess: boolean = false;
  errorMessage: any;
  successMessage: any;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private backTurnosService: BackTurnosService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    console.log(this.id)
    if(!(this.id > 0)){
      this.router.navigate(["/home"]);
    }
    
  }
  ngOnInit(): void {
    this.getActivityById()
  }
  getActivityById(){
    this.loading = true;
    this.isError = false;
    this.backTurnosService.getActivityById(Number(this.id))
    .subscribe({
      next:(data) => {
        this.loading = false;
        console.log(data);
        this.activity = data;
      },
      error:(error) => {
        this.loading = false;
        this.isError = true;
        this.errorMessage = error.message;
      }
    })
  }
  onSubmit(){
    this.isSuccess = false;
      this.isError = false;
      this.backTurnosService.updateActivity(this.activity)
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
