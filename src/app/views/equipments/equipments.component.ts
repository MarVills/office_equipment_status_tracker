import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EQUIPMENT_DATA } from 'src/app/Models/equipment.model';
import { Equipment, EquipmentDTO } from 'src/app/Models/equipment.model';
import { FormGroup, FormGroupDirective, } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { EquipmentsService } from 'src/app/store/services/inventory/equipments.service';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {
  
  displayedColumns = [ 'equipment', 'status', 'category', 'action'];
  dataSource = new MatTableDataSource<Equipment>(EQUIPMENT_DATA);
  _equipmentForm!: FormGroup;
  toEditData!:EquipmentDTO;
  
  constructor(
    breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private equipmentService: EquipmentsService,
    private sharedService: SharedService
    ) { 
    breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
          [ 'equipment', 'status', 'category', 'action'] :
          [ 'equipment', 'status', 'category', 'action'];
    });
  }

  ngOnInit(): void {
    this.equipmentService.onFetchEquipments();
    this.refresh()
  }
  
   onDelete(data: EquipmentDTO){
    this.equipmentService.onDeleteEquipment(data).then((res)=>{
      this.sharedService.openSnackBar("Deleted successfully", "Undo")
    })
    this.refresh();
  }

  refresh(){
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<Equipment>(EQUIPMENT_DATA);
    }, 1000);
  }

  clearForm(formDirective: FormGroupDirective){
    this._equipmentForm.reset();
    formDirective.resetForm();
  }

  openAddDialog(): void {
    this.equipmentService.isEdit = false;
    const addDialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {},
    });
    addDialogRef.afterClosed().subscribe(() => {
      this.refresh()
    });
  }

  openEditDialog(data: any): void {
    this.equipmentService.isEdit = true;
    this.equipmentService.toEditData = data;
    const editDialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: { 
        equipment: data.equipment, 
        status: data.status, 
        category: data.category, 
        price: data.price, 
        description: data.description 
      },
    });
    editDialogRef.afterClosed().subscribe(result => {
      this.equipmentService.isEdit = false;
      this.refresh()
    });
  }

}

