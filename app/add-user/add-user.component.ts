import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user = {
    firstName: '',
    lastName: '',
    nickName: '',
    email:''
  }
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  createUser(fName): void {
    console.log(fName);
    console.log(fName.value);
    console.log(fName.value.firstName);
    this.user.firstName = fName.value.firstName;
    this.user.lastName = fName.value.lastName;
    this.user.nickName = fName.value.nickName;
    this.user.email = fName.value.email;
    this.userService.createUser(this.user).subscribe( user => {
     alert("New user created!")
   });
  }

  ngOnInit() {
  }

}
