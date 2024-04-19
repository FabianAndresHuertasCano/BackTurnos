import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/models/User';
import { BackTurnosService } from 'src/services/back-turnos.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  id = '';
  user: User = new User();
  loading: boolean = false;
  isError: boolean = false;
  errorMessage: string = '';
  isSuccess: boolean = false;
  successMessage: string = '';
  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private backTurnosService: BackTurnosService
    ) {
      this.id = this.route.snapshot.paramMap.get('id') ?? '';
      if(!this.id){
        this.router.navigate(["/home"]);
      }
    }
  ngOnInit(): void {
    this.getUserById();
  }
  getUserById(){
    this.loading = true;
    this.isError = false;
    this.backTurnosService.getUserById(Number(this.id))
    .subscribe({
      next:(data) => {
        this.loading = false;
        console.log(data);
        this.user = data;
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
    this.backTurnosService.updateUser(this.user)
    .subscribe({
      next:(data) => {
        this.loading = false;
        this.isSuccess = true;
        this.successMessage = data.message;
      },
      error:(error) => {
        console.error(error)
        this.loading = false;
        this.isError = true;
        this.errorMessage = error.message;
      }
    })
  }
}
