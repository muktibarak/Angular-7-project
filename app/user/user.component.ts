import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../model/user.interface'




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // fName: string;
  users: User[];
  User = {
    id:0,
    firstName:'',
    lastName:'',
    nickName:'',
    email:'',
    action:''
    };
  
  constructor(
    private router: Router,
    private userService: UserService,
  ) { }


  ngOnInit() {

    this.userService.getUsers().subscribe((users) => {
      //console.log(users);
      this.users = users;
      //console.log(this.users);
    });
  }

  onClick1(userId: number) {
    // console.log('deleted');
    this.userService.deleteUser(userId).subscribe(users =>
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      })
      // console.log('deleted: ', users));
      // this.user = users)
    )
  }
  

  onClick2(updatedUser) {
   console.log(updatedUser);
   this.userService.putUser(updatedUser).subscribe( users => {
     this.User = users;
   })
   
  


  }
}
