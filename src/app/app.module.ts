import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { ProductService } from './product.service';
import { SomeThingComponent } from './Service_Something/some-thing.component';
import { Use_Fake } from './token';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SomeThingComponent,
    TemplateDrivenFormComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide:EmployeeService,useClass:EmployeeService},
    {provide:Use_Fake,useValue:"Hi Goutham"},{provide:"Factory",useFactory:()=>{ return "Hello"}},
  {provide:EmployeeService,useExisting:ProductService},{provide:ProductService,useClass:ProductService }],
  bootstrap: [AppComponent]
})
export class AppModule { }

