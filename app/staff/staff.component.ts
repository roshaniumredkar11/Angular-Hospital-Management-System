import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {


  staffData:any=[ 
    {
      name:'ritu Yadav',
      gender:'Male',
      mobile:'8899556677',
      email:'ritu@gmail.com',
     }];
   selectedIndex:any;
  isEditClicked = false;
  
  staffForm:FormGroup;

 
  constructor(private formBuilder:FormBuilder) {

    this.staffForm = this.formBuilder.group({
      name:[''],
      gender:[''],
      mobile:[''],
      email:[''],
    })

  }
  ngOnInit(): void {
  }

  submit(){
    this.staffData.push(this.staffForm.value);
    this. clear();
  }
 
  edit(i:any){
    this.isEditClicked = true;
    this.selectedIndex = i;

    this.staffForm.patchValue({
      name:this.staffData[i].name,
      gender:this.staffData[i].gender,
      mobile:this.staffData[i].mobile,
      email:this.staffData[i].email
    })
  }

  update(){
    this.staffData[this.selectedIndex].name = this.staffForm.value.name;
   this.staffData[this.selectedIndex].gender = this.staffForm.value.gender;
   this.staffData[this.selectedIndex].mobile = this.staffForm.value.mobile;
   this.staffData[this.selectedIndex].email = this.staffForm.value.email;

    this.isEditClicked = false;
    this. clear();
  }

  Delete(i:any){
    this.staffData.splice(i,1);
  }

  clear(){
    this.staffForm.reset();
  }    


}
