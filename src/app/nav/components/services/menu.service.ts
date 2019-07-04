import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { RequestService} from 'src/app/services/request.service';
import { User} from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private req: RequestService) {}

  // clickCounter = 0;

  // constructor() { }

// incrementClickCounter(): void{
//   this.clickCounter++;
//   console.log(this.clickCounter);

getUserData(url: string): Observable<User[]> {
  return this.req.get<User[]>(url);
  
}
}

