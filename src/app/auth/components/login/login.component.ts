import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  warning = "";
  
  constructor(private auth: AuthService, private router: Router) {}
  login = new FormGroup({
    username: new FormControl('', Validators.required)
  })
  ngOnInit() {}

  onLogin() {
    try {
      this.auth.login(this.login.controls['username'].value).subscribe(() => {
        sessionStorage.setItem("user", this.login.controls['username'].value);
        this.router.navigate(['/']);
      })
    } 
    catch(error) {
      console.log("This error happened:", error);
      this.login.reset;
      this.warning = "Sorry, the username you have entered has not been recognised";
    }
  }
}
