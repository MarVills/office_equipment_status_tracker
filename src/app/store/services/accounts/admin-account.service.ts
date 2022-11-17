import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, validateEventsArray } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subscribable, Subscription } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AccountDetails } from '../../state/accounts/manage-account.state';
import { ACCOUNT_DETAILS_DATA } from '../../state/accounts/manage-account.state';

@Injectable({
  providedIn: 'root'
})
export class AdminAccountService implements OnDestroy{

  accountDetails$!: Subscription;
  accDetail$!: Subscription;
  accDetailObservable$ = this.getObservable(this.fireStore.collection('users')) as Observable<AccountDetails[]>;

  constructor(private fireStore: AngularFirestore) { }

  ngOnDestroy(): void {
    this.accDetail$.unsubscribe();
    this.accountDetails$.unsubscribe();
  }

  getObservable(collection: AngularFirestoreCollection<AccountDetails>){
    const subject = new BehaviorSubject<AccountDetails[]>([]);
    this.accountDetails$ = collection.valueChanges({ idField: 'id' }).subscribe((val: AccountDetails[]) => {
      subject.next(val);
    });
    return subject;
  }; 
  
 onFetchAccDetails(){

    this.accDetailObservable$.subscribe((responseDTO) => {
      ACCOUNT_DETAILS_DATA.splice(0)
      for (var response of responseDTO) {

        if(response.uid == localStorage.getItem('uid')){
          localStorage.setItem("userDocID", response.id!)
          accData = {
            firstName: response.firstName ,
            lastName: response.lastName,
            middleName: response.middleName,
            userRole: response.userRole,
            emailAddress: response.emailAddress,
            description: response.description,
            profileImageID: response.profileImageID,
            contactNumber: response.contactNumber,
            uid: localStorage.getItem('uid')!
          }
        }
      }
    })
  } 

  fetchAccounts(){
    this.accDetailObservable$.subscribe((response) => {
      console.log(response)
      ACCOUNT_DETAILS_DATA.splice(0)
      for (var res of response) {
        ACCOUNT_DETAILS_DATA.push(res);
      }
    })
  }

  onEditAccountDetails(newData:any){
    // EQUIPMENT_DATA[EQUIPMENT_DATA.indexOf({
    //   name: currentData.name,
    //   status: currentData.status,
    //   price: currentData.price, 
    //   category: currentData.category,
    //   description: currentData.description
    // })] = newData;
    return this.fireStore.collection('users').doc(localStorage.getItem('userDocID')!).update(newData);
  }
}

export let accData: AccountDetails = {
  firstName: '' ,
  profileImageID:'',
  lastName: '',
  middleName: '',
  userRole: '',
  emailAddress: '',
  description: '',
  contactNumber: '',
  uid: ''
}