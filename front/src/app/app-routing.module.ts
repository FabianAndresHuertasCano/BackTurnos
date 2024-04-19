import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ActivityAddComponent } from './activity/activity-add/activity-add.component';
import { ActivityEditComponent } from './activity/activity-edit/activity-edit.component';

const routes: Routes = [
  {
    path:"",
    children: [
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "user/add", component: UserAddComponent },
      { path: "user/edit/:id", component: UserEditComponent },
      { path: "activity/add/:id/:username", component: ActivityAddComponent },
      { path: "activity/edit/:id", component: ActivityEditComponent },
  ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
