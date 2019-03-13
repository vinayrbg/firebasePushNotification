import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './firebase-messaging/messaging.service';
import { FirebaseService } from './services/firebase.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
  ],
  providers: [MessagingService, AsyncPipe, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }


