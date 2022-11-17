import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Equipment, EquipmentDTO, EQUIPMENT_DATA } from '../../state/equipments.state';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService implements OnDestroy{

  equipmentObservable$ = this.getObservable(this.fireStore.collection('equipments')) as Observable<Equipment[]>;
  equipments$!: Subscription;
  fetchEquipments$!: Subscription;
  isEdit:boolean = false;
  toEditData!:EquipmentDTO;
  

  constructor(private fireStore: AngularFirestore) { }

  ngOnDestroy(): void {
    this.equipments$.unsubscribe();
    this.fetchEquipments$.unsubscribe();
  }

  getObservable(collection: AngularFirestoreCollection<Equipment>){
    const subject = new BehaviorSubject<Equipment[]>([]);
    this.equipments$ = collection.valueChanges({ idField: 'id' }).subscribe((val: Equipment[]) => {
      subject.next(val);
    });
    return subject;
  };

  onFetchEquipments(){
    this.fetchEquipments$ = this.equipmentObservable$.subscribe((responseDTO) => {
      EQUIPMENT_DATA.splice(0)
      for (var response of responseDTO) {
        EQUIPMENT_DATA.push(response);
      }
    })
  }

  onAddEquipment(data: any){
    return this.fireStore.collection('equipments').add(data)
  }

  onEditEquipment(currentData: EquipmentDTO, newData: Equipment){
    EQUIPMENT_DATA[EQUIPMENT_DATA.indexOf({
      name: currentData.name,
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
