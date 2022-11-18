import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
// import { Equipment, EquipmentDTO, EQUIPMENT_DATA } from '../../state/equipments.state';
import { Equipment, EquipmentDTO, EQUIPMENT_DATA } from 'src/app/Models/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService implements OnDestroy{

  fetchEquipments$!: Subscription;
  isEdit:boolean = false;
  toEditData!:EquipmentDTO;
  observable$ = this.getObservable(this.fireStore.collection('equipments')) as Observable<Equipment[]>;
  
  constructor(private fireStore: AngularFirestore) { }

  ngOnDestroy(): void {
    this.fetchEquipments$.unsubscribe();
  }

  getObservable(collection: AngularFirestoreCollection<Equipment>){
    const subject = new BehaviorSubject<Equipment[]>([]);
    collection.valueChanges({ idField: 'id' }).subscribe((val: Equipment[]) => {
      subject.next(val);
    });
    return subject;
  };

  onFetchEquipments(){
    this.fetchEquipments$ = this.observable$.subscribe((response) => {
      EQUIPMENT_DATA.splice(0)
      for (var res of response) {
        EQUIPMENT_DATA.push(res);
      }
    })
  }

  onAddEquipment(data: any){
    return this.fireStore.collection('equipments').add(data)
  }

  onEditEquipment(currentData: EquipmentDTO, newData: Equipment){
    console.log('data',currentData)
    EQUIPMENT_DATA[EQUIPMENT_DATA.indexOf({
      equipment: currentData.equipment,
      status: currentData.status,
      price: currentData.price, 
      category: currentData.category,
      description: currentData.description
    })] = newData;
    return this.fireStore.collection('equipments').doc(currentData.id).update(newData);
  }

  onDeleteEquipment(data: EquipmentDTO){
    EQUIPMENT_DATA.splice(EQUIPMENT_DATA.indexOf(data), 1)
    return this.fireStore.collection('equipments').doc(data.id).delete();
  }
}
