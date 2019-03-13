import { Component, OnInit } from '@angular/core';
import { MessagingService } from './firebase-messaging/messaging.service';
import { FirebaseService } from './services/firebase.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  message;
  body;

  constructor(private messagingService: MessagingService,private firebaseService:FirebaseService) { }

  ngOnInit() {
    const userId = 'user001';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }

  sendMsg(){
    console.log("called")
    this.body = {
      notification: {
        title: "Hello World!!!", 
        body: "This is Message from Admins"
       },
       to : "cDB8ApOO740:APA91bGgv0wv-gkLbLYZemHJ_Qx0w3npvWRWDzYWr8z2TZOkr0N7gO_adJJvMsGdsCi39ECcmXTDCNpO40FKQ3IUNTQmXvbD9vdwUC8TUG7IG9E5WYBwByrpG_772curxlj7a_ML1P6e"
    }
    this.firebaseService.sendMessage(this.body).subscribe((result) => {
      console.log("result", result)
    })

  }

}