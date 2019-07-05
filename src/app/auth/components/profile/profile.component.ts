import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
    let userData = sessionStorage.getItem("user");
    this.auth.findUser(userData).subscribe((user)=> {
      this.firstname = user.firstName;
      this.surname =  user.surname
    })
  }

  firstname = "";
  surname = "";
  username = sessionStorage.getItem("user");

deleteUser() {
  this.auth.delete(sessionStorage.getItem("user")).subscribe((data)=> {
    console.log(data);

  } );
}
moveUpdate() {
  this.route.navigate(['/update']);

}
logoutUser() {
  sessionStorage.removeItem("user");
  this.route.navigate(['/']);
}

}
