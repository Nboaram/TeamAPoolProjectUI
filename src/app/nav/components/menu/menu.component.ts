import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.minLength(4)),
    password: new FormControl('')
  });

  constructor(private menu: MenuService) { }

  ngOnInit(): void {

    this.loginForm.valueChanges.subscribe((val) => {
      console.log('VALUE', val);
    });

    // this.username.valueChanges.subscribe((val) => {
    //   console.log('VALUE', val);
    // }

    // this.loginForm.

  }

  clicked(){
    this.menu.getUserData('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {

    for (let x = 0; x < data.length; x++)(
      console.log('data', data[x].title)
    )
    });
  }


}