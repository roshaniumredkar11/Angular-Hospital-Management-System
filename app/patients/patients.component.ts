import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {


  
  patientData:any=[ 
    {
      name:'Neha Yadav',
      gender:'Female',
      age:'22',
      mobile:'8899556677',
     }];
   selectedIndex:any;
  isEditClicked = false;
  
  patientForm:FormGroup;

 
  constructor(private formBuilder:FormBuilder) {

    this.patientForm = this.formBuilder.group({
      name:[''],
      gender:[''],
      age:[''],
      mobile:[''],
    })

  }
  ngOnInit(): void {
  }

  submit(){
    this.patientData.push(this.patientForm.value);
    this. clear();
  }
 
  edit(i:any){
    this.isEditClicked = true;
    this.selectedIndex = i;

    this.patientForm.patchValue({
      name:this.patientData[i].name,
      gender:this.patientData[i].gender,
      age:this.patientData[i].age,
      mobile:this.patientData[i].mobile,
    
    })
  }

  update(){
    this.patientData[this.selectedIndex].name = this.patientForm.value.name;
   this.patientData[this.selectedIndex].gender = this.patientForm.value.gender;
   this.patientData[this.selectedIndex].age = this.patientForm.value.age;
   this.patientData[this.selectedIndex].mobile = this.patientForm.value.mobile;


    this.isEditClicked = false;
    this. clear();
  }

  Delete(i:any){
    this.patientData.splice(i,1);
  }

  clear(){
    this.patientForm.reset();
  }    

}
