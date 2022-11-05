import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EQUIPMENT_DATA } from '../../store/state/equipments.state';
import { Equipment, EquipmentDTO } from 'src/app/Models/equipment.model';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {
  
  displayedColumns = [ 'name', 'status', 'category', 'action'];
  dataSource = new MatTableDataSource<Equipment>(EQUIPMENT_DATA);
  equipments$ = this.getObservable(this.fireStore.collection('equipments')) as Observable<Equipment[]>;
  _equipmentForm!: FormGroup;
  isEdit:boolean = false;
  toEditData!:EquipmentDTO;
 

  constructor(
    breakpointObserver: BreakpointObserver,
    private formBuilder: FormBuilder,
    private fireStore: AngularFirestore) { 
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
          [ 'name', 'status', 'category', 'action'] :
          [ 'name', 'status', 'category', 'action'];
    });
  }

  ngOnInit(): void {
    this.equipmentForm();
    this.onFetchEquipments();
  }
  
  equipmentForm(editData?: Equipment){
    this._equipmentForm = this.formBuilder.group({
      name: new FormControl(editData?editData.name:"", Validators.required),
      status: new FormControl(editData?editData.status:"", Validators.required),
      price: new FormControl(editData?editData.price:"", [
        Validators.required,
        RxwebValidators.numeric({allowDecimal:true,isFormat:true})  
      ]),
      category: new FormControl(editData?editData.category:"", Validators.required),
      description: new FormControl(editData?editData.description:"", Validators.required),
     });
  }

  getObservable(collection: AngularFirestoreCollection<Equipment>){
    const subject = new BehaviorSubject<Equipment[]>([]);
    collection.valueChanges({ idField: 'id' }).subscribe((val: Equipment[]) => {
      subject.next(val);
    });
    return subject;
  };

  onFetchEquipments(){
    this.equipments$.subscribe((responseDTO) => {
      console.log(responseDTO);
      EQUIPMENT_DATA.splice(0)
      for (var response of responseDTO) {
        console.log(response);
        EQUIPMENT_DATA.push(response);
        console.log("equipment data", EQUIPMENT_DATA);
      }
    })
    this.refresh();
  }

  onAddEquipment(formDirective: FormGroupDirective){
    var data = this._equipmentForm.value;
    EQUIPMENT_DATA.push(data)
    this.fireStore.collection('equipments').add(data);
    this.refresh();
    this.clearForm();
    formDirective.resetForm();
  }

  onSelectEditEquipment(data: EquipmentDTO){
    this.isEdit = true;
    this.toEditData = data;
    this.equipmentForm(data)
  }

  onEditEquipment(formDirective: FormGroupDirective){
    var value = this.toEditData
    console.log(value);
    this.isEdit = false;
    this.fireStore.collection('equipments').doc(value.id).update(this._equipmentForm.value);
   
        EQUIPMENT_DATA[EQUIPMENT_DATA.indexOf({
          name: value.name,
          status: value.status,
          price: value.price, 
          category: value.category,
          description: value.description
        })] = this._equipmentForm.value;
        
    
    
    formDirective.resetForm();
    this.refresh();
  }

  onCancelEdit(formDirective: FormGroupDirective){
    this.isEdit = false
    formDirective.resetForm();
  }

  onDeleteEquipment(data: EquipmentDTO){
    console.log(data);
    // this.fireStore.collection('equipments').doc(data.id).delete();
    this.fireStore.collection('equipments').doc(data.id)
    this.fireStore.collection('equipments', (ref)=>{
      var returndata = ref.where('name', '==', 'tyu')
      console.log("returndata",ref)
      return returndata;
    });
    
    EQUIPMENT_DATA.splice(EQUIPMENT_DATA.indexOf(data), 1)
    this.refresh()
  }

  refresh(){
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<Equipment>(EQUIPMENT_DATA);
    }, 1000);
  }

  clearForm(){
    this._equipmentForm.reset()
  }

}

