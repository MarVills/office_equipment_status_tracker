import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from 'src/app/store/state/accounts/manage-account.state';
import { UserAccountDialogComponent } from './components/user-account-dialog/user-account-dialog.component';
import { ACCOUNT_DETAILS_DATA } from 'src/app/store/state/accounts/manage-account.state';
import { AccountDetails } from 'src/app/store/state/accounts/manage-account.state';
import { AdminAccountService } from 'src/app/store/services/accounts/admin-account.service';
import { accData } from 'src/app/store/services/accounts/admin-account.service';
import { SharedService } from 'src/app/shared/shared.service';
import { 
  AngularFireStorage,  
  AngularFireStorageReference, 
  AngularFireUploadTask } from '@angular/fire/storage';
// import { getStorage, ref } from "firebase/storage";


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
  
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private manageAccount: AdminAccountService,
    private afStorage: AngularFireStorage,
    private sharedService: SharedService,
    private storage: AngularFireStorage) {
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

  uploadImage(): string{
    // const storage = getStorage(); 
    // const storageRef = ref(storage, 'some-child');
    return "";
  }

  imageTest(data: any){
    // const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(data);
    const uploadTask = this.storage.upload("/storage", data);
  }

  openDialog(action: string, obj: any) {
  obj.action = action;
  const dialogRef = this.dialog.open(UserAccountDialogComponent, {
      width: '500px',
      data: obj
  });

  dialogRef.afterClosed().subscribe(result => {
      // if (result.event === 'Add') {
      //     this.addContact(result.data);
      // }
  });
  }

  updateAccount(){
    this.manageAccount.onEditAccountDetails(this._accountDetailsForm.value).then(()=>{
      this.sharedService.openSnackBar("Equipment Edited Successfuly", "Ok");
      this.accountData = accData;
    })
    
  }

  

}


