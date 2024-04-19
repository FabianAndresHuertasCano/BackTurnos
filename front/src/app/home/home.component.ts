import { Component } from '@angular/core';
import { User } from 'src/models/User';
import { BackTurnosService } from 'src/services/back-turnos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: User[] = [];
  loading: boolean;
  isError: boolean;
  errorMessage: string;
  constructor(
    private backTurnosService: BackTurnosService
  ){
    this.loading = false;
    this.isError = false;
    this.errorMessage = "";
  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.loading = true;
    this.isError = false;
    this.backTurnosService.getUsers()
    .subscribe({
      next:(data) => {
        this.loading = false;
        console.log(data);
        this.users = data;
      },
      error:(error) => {
        this.loading = false;
        this.isError = true;
        this.errorMessage = error.message;
      }
    })
  }
}
