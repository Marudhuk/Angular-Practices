import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { 
  this.reactiveForm=this.formBuilder.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    email:['',Validators.required,Validators.pattern("0-9")],
    gender:['',Validators.required],
  })

  console.log(this.reactiveForm);
  
}
  reactiveForm: FormGroup;

  get form(){
    return this.reactiveForm.controls;
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
   
    if(this.reactiveForm.invalid)
      return this.reactiveForm.markAllAsTouched();

    console.log(this.reactiveForm.value);
    
  }

}
export class contact {
  firstname?: string;
  lastname?:string;
  gender?:string;
 
} 
 