import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectEquipment } from 'src/app/store/equipments/equipments.selectors';
import { selectUserDetail } from 'src/app/store/user-details/user-details.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  totalEquipment: number = 0;
  totalUsers: number = 0;
  equipmentSubscription$!: Subscription;
  userDetailsSubscription$!: Subscription;

  constructor(private store: Store) {
    this.equipmentSubscription$ = this.store
      .select(selectEquipment)
      .subscribe((response) => {
        // console.log("equipment response",response)
        // this.totalEquipment = response.length;
      });
    this.userDetailsSubscription$ = this.store
      .select(selectUserDetail)
      .subscribe((response) => {
        console.log('users response', response);
        this.totalUsers = response.length;
      });
  }

  ngOnDestroy(): void {
    this.equipmentSubscription$.unsubscribe();
    this.userDetailsSubscription$.unsubscribe();
  }

  ngOnInit(): void {}
}
