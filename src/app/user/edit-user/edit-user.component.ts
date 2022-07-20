import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userId: any;
  userDetail: any;
  dataLoaded: boolean = false;
  editUserForm: FormGroup = new FormGroup({});

  constructor(
    private activatedRoute: ActivatedRoute,
    private userservice: UserService,
    private formbuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe((data) => {
      // subscribe is to capture all the changes
      this.userId = data['id'];
    });

    //View user details
    if (this.userId !== '') {
      this.userservice
        .viewUser(this.userId)
        .toPromise()
        .then((data) => {
          this.userDetail = data;
          Object.assign(this.userDetail, data);
          console.log(this.userDetail);

          //Once we have the details we will build edit form here
          this.editUserForm = this.formbuilder.group({
            name: new FormControl(this.userDetail.name),
            email: new FormControl(this.userDetail.email),
          });
          this.dataLoaded = true;
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
  updateUser() {
    this.userservice.updateUser(this.userId,this.editUserForm.value).subscribe(data =>{
      this._snackBar.open("User updated Successfully");
    }, err => {
      this._snackBar.open("Unable to update User");
    })
  }
}
