import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  clickCounter = 0;

  constructor() { }

incrementClickCounter(): void{
  this.clickCounter++;
  console.log(this.clickCounter);
}

}
