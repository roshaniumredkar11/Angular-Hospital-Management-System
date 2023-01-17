import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {


  billData:any=[ 
    {
      name:'Neha Yadav',
      age:'22',
      mobile:'8899556677',
      amt:'3000'
     }];
   selectedIndex:any;
  isEditClicked = false;
  
  billForm:FormGroup;

 
  constructor(private formBuilder:FormBuilder) {

    this.billForm = this.formBuilder.group({
      name:[''],
      age:[''],
      mobile:[''],
      amt:[''],
    })

  }
  ngOnInit(): void {
  }

  submit(){
    this.billData.push(this.billForm.value);
    this. clear();
  }
 
  edit(i:any){
    this.isEditClicked = true;
    this.selectedIndex = i;

    this.billForm.patchValue({
      name:this.billData[i].name,
      age:this.billData[i].age,
      mobile:this.billData[i].mobile,
      amt:this.billData[i].amt,
    
    })
  }

  update(){
    this.billData[this.selectedIndex].name = this.billForm.value.name;
   this.billData[this.selectedIndex].age = this.billForm.value.age;
   this.billData[this.selectedIndex].mobile = this.billForm.value.mobile;
   this.billData[this.selectedIndex].amt = this.billForm.value.amt;


    this.isEditClicked = false;
    this. clear();
  }

  Delete(i:any){
    this.billData.splice(i,1);
  }

  clear(){
    this.billForm.reset();
  }  
  
}
