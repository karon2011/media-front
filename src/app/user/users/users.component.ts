import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/media-common/services/api/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(data => {
      console.log("data", data);
    }
    )

  }

}
