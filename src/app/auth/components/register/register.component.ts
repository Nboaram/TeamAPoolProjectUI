import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registration = new FormGroup({
    username: new FormControl('', Validators.required ),
    firstName: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private auth: AuthService) {}
  
  
  ngOnInit() {
  }

  onRegister() {
    console.log(this.registration.value);
    this.auth.register(this.registration.value).subscribe(()=> sessionStorage.setItem("user", this.registration.controls['username'].value));
  }
}
