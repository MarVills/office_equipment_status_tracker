import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserAccountDialogComponent } from './components/user-account-dialog/user-account-dialog.component';
import { AccountDetails, ACCOUNT_DETAILS_DATA } from 'src/app/Models/manage-account.model';
import { AdminAccountService } from 'src/app/store/services/accounts/admin-account.service';
import { accData } from 'src/app/store/services/accounts/admin-account.service';
import { SharedService } from 'src/app/shared/shared.service';
import { finalize } from 'rxjs/operators';
import { 
  AngularFireStorage,  
  AngularFireStorageReference, 
  AngularFireUploadTask } from '@angular/fire/storage';


@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.scss']
})
export class ManageAccountComponent implements OnInit {

  ref!: AngularFireStorageReference;
  task!: AngularFireUploadTask;
  closeResult = '';
  accounts: AccountDetails[] = [];
  searchText: any;
  accDetails!: AccountDetails;
  hide = true;
  _accountDetailsForm!: FormGroup;
  accountData = accData;
  base64Output!: string;
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  imagePath:any;
  file!: FileUpload;
  downloadUrl: string = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
 
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private manageAccount: AdminAccountService,
    private sharedService: SharedService,
    private storage: AngularFireStorage,) {
      this.accountDetailsForm(); 
  }

  ngOnInit(): void {
    this.manageAccount.onFetchAccDetails();
    this.manageAccount.fetchAccounts();
    this.accounts = ACCOUNT_DETAILS_DATA;
    
    setTimeout(() => {
      this._accountDetailsForm = this.formBuilder.group({
        firstName: new FormControl(accData.firstName, Validators.required),
        lastName: new FormControl(accData.lastName, Validators.required),
        middleName: new FormControl(accData.middleName, Validators.required),
        emailAddress: new FormControl(accData.emailAddress, [Validators.required, Validators.email]),
        contactNumber: new FormControl(accData.contactNumber, Validators.required),
        profileImage: new FormControl(""),
        description: new FormControl(accData.description, Validators.required),
      });
      this.accountData = accData;
      this.downloadUrl = accData.profileImageID? accData.profileImageID: this.downloadUrl
      
    }, 1000);
  }

  accountDetailsForm(){
    this._accountDetailsForm = this.formBuilder.group({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      middleName: new FormControl("", Validators.required),
      emailAddress: new FormControl("", [Validators.required, Validators.email]),
      contactNumber: new FormControl("", Validators.required),
      profileImage: new FormControl(""),
      description: new FormControl("", Validators.required),
    }); 
  }

  imageTest=(event: any)=>{
    let file = event.target.files[0];
    console.log("file",file)
    let fileName = this.sharedService.randomString(10);
    const filePath = `profiles/${fileName}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file)
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          this.downloadUrl = downloadURL
        })
      })
    ).subscribe();
  }

  openDialog(action: string, obj: any) {
  obj.action = action;
  const dialogRef = this.dialog.open(UserAccountDialogComponent, {
      width: '500px',
      data: obj
  });

  dialogRef.afterClosed().subscribe(result => {
  });
  }

  updateAccount(){
    var value = this._accountDetailsForm.value;
    value.profileImageID = this.downloadUrl;
    this.manageAccount.onEditAccountDetails(this.manageAccount.toEditAccount, {
      firstName: value.firstName,
      lastName: value.lastName,
      middleName: value.middleName,
      emailAddress: value.emailAddress,
      contactNumber: value.contactNumber,
      profileImageID: this.downloadUrl,
      description: value.description
    }).then(()=>{
      this.sharedService.openSnackBar("Equipment Edited Successfuly", "Ok");
      this.accountData = accData;
    })
    
  }
}

export class FileUpload {
  key!: string;
  name!: string;
  url!: string;
  file: File;
  constructor(file: File) {
    this.file = file;
  }
}





