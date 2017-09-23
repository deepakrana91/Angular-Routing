import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { FormdataService } from './../formdata.service';
import { FormService } from './../form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  title = 'Simple Form';
  desigArray:any[]=[];
  defaultDesignation="Mr"

  constructor(private formService:FormService,private formDataservice:FormdataService,
    private authService:AuthService){}

  ngOnInit() {
    this.desigArray= this.formService.title
  }

     onSubmit(form:NgForm){
    
        let user={
          fname:form.value.fname,
          lname:form.value.lname,
          email:form.value.email,
          date:form.value.date,
          designation:form.value.select,
        }
        this.formDataservice.addData(user);
        console.log(form.value)
        form.reset();
        
    }

    logIn(){
      
          this.authService.login();
        }
      
        logOut(){
          this.authService.logout();
        }

}
