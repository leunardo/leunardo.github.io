import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private router: Router) {
  }


  login(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result => {
      if (result.user) {
        this.router.navigate(['']);
      }
    });
  }
  logout(): void {
    this.auth.signOut();
  }

  ngOnInit(): void {
  }

}
