import { Component } from '@angular/core';
import { User } from 'src/models/User';
import { FormsModule } from '@angular/forms';
import { BackTurnosService } from 'src/services/back-turnos.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  user: User = new User();
  loading: boolean = false;
  isError: boolean = false;
  isSuccess: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  ngOnInit(): void {
    console.log("Entró a crear usuario")
  }
  constructor(
    private backTurnosService: BackTurnosService
  ){}
  onSubmit(){
    this.isSuccess = false;
    this.isError = false;
    this.backTurnosService.createUser(this.user)
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
