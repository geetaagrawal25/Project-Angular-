import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userId : string ="";
  constructor(private activatedRoute: ActivatedRoute,
    private userservice: UserService,
    private _snackbar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.userId = data['id'];
    });

    if(this.userId){
      this.userservice.deleteUser(this.userId).subscribe(data =>{
        this._snackbar.open("User Deleted sucessfully");
        this.router.navigate(['list'])
      }, err =>{
        this._snackbar.open("Unable to delete user");
      })
    }
  }

}
