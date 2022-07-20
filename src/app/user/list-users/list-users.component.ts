import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [
  
 ];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'action'];
  dataSource = ELEMENT_DATA;
  listUsers : User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data => {
      console.log(data);
      
      this.listUsers = data;
     });
  }

}
