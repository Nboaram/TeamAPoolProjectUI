import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/user';

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

  onSubmit() {
    console.log(this.registration.value);
    let data = this.registration.value;
    sessionStorage.setItem("data", JSON.stringify(data.username.value));
    this.auth.register(this.registration.value).subscribe()
  }
}
