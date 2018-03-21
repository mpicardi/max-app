import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';
import { TaskComponent } from './task/task.component';
import { NotificationServiceService } from './notification-service.service';
import { TaskService } from './task.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotificationComponent,
    TaskComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NotificationServiceService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
