
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EQUIPMENT_CONDITIONS } from 'src/app/shared/equipment-conditions/equipment-conditions';
import { EquipmentsService } from 'src/app/store/services/inventory/equipments/equipments.service';
import { CategoriesService } from 'src/app/store/services/inventory/equipments/categories.service';
import { Equipment, EQUIPMENT_DATA, EquipmentsWithSelectedStatus, EquipmentDTO } from 'src/app/Models/equipment.model';
import { CATEGORY_DATA } from 'src/app/Models/category.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ManageAccountService } from 'src/app/store/services/manage-account.service';


@Component({
  selector: 'app-equipment-condition',
  templateUrl: './equipment-condition.component.html',
  styleUrls: ['./equipment-condition.component.scss'],
})
export class EquipmentConditionComponent implements  OnInit {

  panelOpenState = false;
  equipmentConditions = Object.values(EQUIPMENT_CONDITIONS);
  categories = CATEGORY_DATA;
  equipments =  EQUIPMENT_DATA;
  equipmentsByCategory: Map<string, EquipmentsWithSelectedStatus> = new Map<string, EquipmentsWithSelectedStatus>();
  displayedColumns = ['serialNumber', 'equipmentName', 'status'];
  selectedEquipments:any;
  _searchEquipmentForm!: FormGroup;

  constructor(breakpointObserver: BreakpointObserver,
             private equipmentsService: EquipmentsService,
             private categoriesService: CategoriesService,
             private formBuilder: FormBuilder,
             private manageAccountService: ManageAccountService){
      breakpointObserver.observe(['(max-width: 600px)']).subscribe(result => {
        this.displayedColumns = result.matches ?
            ['serialNumber', 'equipmentName', 'status'] :
            ['serialNumber', 'equipmentName', 'status'];
      });
  }
  
  ngOnInit(): void {
    this.refresh();
    this.equipmentsService.onFetchEquipments();
    this.categoriesService.onFetchCategories();
    this.manageAccountService.onFetchAccDetails();
    this.searchEquipmentForm();
  }

  searchEquipmentForm(){
    this._searchEquipmentForm = this.formBuilder.group({
      searchEquipment: new FormControl(""),
     });
  }

  panelClicked(category: any){
    this.selectedEquipments = category
    this._searchEquipmentForm.reset();
  }

  applyFilter(filterValue: string, category: any) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    const equipments:EquipmentsWithSelectedStatus = category.value;
    if(equipments.items.length != 0){
      let filteredValue = equipments.items.filter((equipmentDetails)=>{
        return equipmentDetails.equipment + equipmentDetails.status.includes(filterValue)
      });
      const values: EquipmentsWithSelectedStatus = { isSelected:equipments.isSelected, items:filteredValue}
      const key = category.key;
      this.selectedEquipments = {key: key, value:values}
    }
  }

  setEquipmentsByCategories(){
    this.categories.forEach((category)=>{
      const filteredEquipment = this.equipments.filter((equipment)=>equipment.category === category.category);
      const values = {
        isSelected: false,
        items: filteredEquipment,
      }
      filteredEquipment?this.equipmentsByCategory.set(category.category, values):null
    })
  }

  onConditionChange(data: string){
    const previousData = this.equipmentsService.toEditData;
    const latestData:Equipment = {
      equipment: previousData.equipment,
      category: previousData.category,
      status: data,
      description: previousData.description,
      serialNumber: previousData.serialNumber
    }
    this.equipmentsService.onEditEquipment(this.equipmentsService.toEditData, latestData)
  }

  onSelectionClicked(data: EquipmentDTO){
    this.equipmentsService.toEditData = data;
  }

  refresh(){
    setTimeout(() => {
      this.setEquipmentsByCategories()
    }, 2000);
  }

}



