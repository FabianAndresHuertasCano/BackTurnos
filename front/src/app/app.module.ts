import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAddComponent } from './user-add/user-add.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivityAddComponent } from './activity/activity-add/activity-add.component';
import { ActivityEditComponent } from './activity/activity-edit/activity-edit.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    HomeComponent,
    UserEditComponent,
    ActivityComponent,
    ActivityAddComponent,
    ActivityEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
