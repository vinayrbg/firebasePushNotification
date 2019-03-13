import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  fcmHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'key=' + environment.fcmAuthHeader
  });

  baseUrl = "https://fcm.googleapis.com/fcm/send";

  constructor(private http: HttpClient) {
  }

  sendMessage(post) {
    console.log(post);
    return this.http.post(this.baseUrl , post, {headers: this.fcmHeaders});
  }
}