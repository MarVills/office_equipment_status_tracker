import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {

  constructor(private fireStore: AngularFirestore) { }

  onAddEquipment(data: any){
    return this.fireStore.collection('equipments').add(data)
  }
}
