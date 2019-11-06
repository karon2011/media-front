import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/media-common/services/api/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(data => {
      console.log("data", data);
    }
    )

  }

}
