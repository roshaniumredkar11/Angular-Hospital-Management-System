import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {


  doctorData:any=[ 
    {
      name:'Neha Yadav',
      special:'Orthopaedic Surgeon',
      mobile:'8899556677',
      degree:'MBBS, MS',
     }];
   selectedIndex:any;
  isEditClicked = false;
  
  doctorForm:FormGroup;

 
  constructor(private formBuilder:FormBuilder) {

    this.doctorForm = this.formBuilder.group({
      name:[''],
      special:[''],
      mobile:[''],
      degree:[''],
    })

  }
  ngOnInit(): void {
  }

  submit(){
    this.doctorData.push(this.doctorForm.value);
    this. clear();
  }
 
  edit(i:any){
    this.isEditClicked = true;
    this.selectedIndex = i;

    this.doctorForm.patchValue({
      name:this.doctorData[i].name,
      special:this.doctorData[i].special,
      mobile:this.doctorData[i].mobile,
      degree:this.doctorData[i].degree
    })
  }

  update(){
    this.doctorData[this.selectedIndex].name = this.doctorForm.value.name;
   this.doctorData[this.selectedIndex].special = this.doctorForm.value.special;
   this.doctorData[this.selectedIndex].mobile = this.doctorForm.value.mobile;
   this.doctorData[this.selectedIndex].degree = this.doctorForm.value.degree;

    this.isEditClicked = false;
    this. clear();
  }

  Delete(i:any){
    this.doctorData.splice(i,1);
  }

  clear(){
    this.doctorForm.reset();
  }    

}
