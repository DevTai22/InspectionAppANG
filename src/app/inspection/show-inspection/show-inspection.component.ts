import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})

export class ShowInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  inspectionTypesList: any = [];

  // Mapa asociado con las claves foráneas
  inspectionTypesMap: Map<number, string> = new Map();

  constructor(private service: InspectionApiService) {}

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
    this.refreshInspectionTypesMap();
  }

  // variables (properties)

  modalTitle:string = "";
  activateAddEditInspectionComponent: boolean = false;
  inspection:any;

  modalAdd() {
    this.inspection= {
      id:0,
      status:null,
      comments:null,
      inspectionTypeId:null
    }
    this.modalTitle = "add Inspection";
    this.activateAddEditInspectionComponent = true;
  }

  modalEdit(item:any){
    this.inspection= item;
    this.modalTitle= "Edit Inspection";
    this.activateAddEditInspectionComponent= true;

  }

  modalMark(item: any, event: Event) {
    console.log(item);
    
    const clickedElement = event.target as HTMLElement;
    const parentRow = clickedElement.closest('tr');
    
    if (parentRow) {
        // Si ya está tachado, destachamos:
        if (parentRow.classList.contains("tachado")) {
            parentRow.classList.remove("tachado");
            return;  // Salimos del método, porque no queremos hacer nada más en este caso.
        }

        // Si confirmas...
        if (confirm("Do you want to mark this Inspection type?")) {

            this.service.getInspectionList().subscribe(data => {
                parentRow.classList.add("tachado");
                
            });
        }
    }
}


  

  delete(item:any) {
    if(confirm("are you sure you want to delete inspection?")){
      this.service.deleteInspection(item.id).subscribe(res=>  {
        var closeModalBtn = document.getElementById("add-edit-modal-close");
      if(closeModalBtn){
        closeModalBtn.click();
      }
      var showDeleteSuccess = document.getElementById("delete-success-alert");
      if(showDeleteSuccess){
        showDeleteSuccess.style.display = "block";
      }
  
      var showDeleteSuccess = document.getElementById("delete-success-alert");
      if(showDeleteSuccess){
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function()
      {
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "none"
        }
      },4000);
      this.inspectionList$ = this.service.getInspectionList();
    })
  }}
  modalClose() {
    this.activateAddEditInspectionComponent = false;
    this.inspectionList$ = this.service.getInspectionList();
  }


  refreshInspectionTypesMap(){
    this.service.getInspectionTypesList().subscribe(data=>{
      this.inspectionTypesList = data;

      for(let i = 0; i <data.length; i++)
      {
        this.inspectionTypesMap.set(this.inspectionTypesList[i].id, this.inspectionTypesList[i].inspectionName);
      }
    })

  }

}
