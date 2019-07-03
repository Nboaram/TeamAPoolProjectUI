import {
  Component,
  OnInit
} from '@angular/core';
import {
  AuthService
} from 'src/app/user/services/auth.service';
import {
  RequestHandlerService
} from 'src/app/user/services/request-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private request: RequestHandlerService) {}

  ngOnInit() {}

}
