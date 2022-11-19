import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Category, CATEGORY_DATA } from 'src/app/Models/equipment.model';
import { EquipmentsService } from 'src/app/store/services/inventory/equipments.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-modify-categories-dialog',
  templateUrl: './modify-categories-dialog.component.html',
  styleUrls: ['./modify-categories-dialog.component.scss']
})
export class ModifyCategoriesDialogComponent implements OnInit {

  categories!: Category[];
  _categoryForm!: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private equipmentsService: EquipmentsService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.categoryForm();
    this.categories = CATEGORY_DATA;
  }

  categoryForm(){
    this._categoryForm = this.formBuilder.group({
      category: new FormControl(""),
     });
  }

  addCategory(formDirective: FormGroupDirective){
    this.equipmentsService.onAddCategory(this._categoryForm.value)
    formDirective.resetForm();
  }

  editCategory(category: any, action: string) {
    if (this.categories) {
      var cat = this.categories;
      switch(action){
        case "edit":
          this.categories.find(x => cat.indexOf(x) === cat.indexOf(category))!.edit = true;
          break;
        case "save":
          this.categories.find(x => cat.indexOf(x) === cat.indexOf(category))!.edit = false;
          
          break;
      }
    }
    this.categories = CATEGORY_DATA;
  }

  deleteCategory(category: any) {
    this.sharedService.openAlertDialog("Delete Category", "Are you sure you want to delete this category?", "Delete")
    // this.categories.splice(this.categories.indexOf(category), 1);
    // this.categories = CATEGORY_DATA;
    // this.equipmentsService.onDeleteCategory(category).then((res)=>{
    //   this.sharedService.openSnackBar(`You deleted ${category.category} category`, "Undo")
    // })
  }

 


}
