import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  //counter : number =  42;

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
      }, () => {
        //this.router.navigate(['/friends']);
        this.router.navigate(['/members'])
      });
  }

  //incrementCounter(): void {
  //  this.counter++;
  //}

  loggedIn() {
    return this.authService.loggedIn();
    //const token = localStorage.getItem('token');
    //return !!token; //If something in token , it'll return true - otherwise it'll return false
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authService.decodedToken = null;

    this.alertify.message('Logged out');

    this.router.navigate(['/home']);
  }

}
