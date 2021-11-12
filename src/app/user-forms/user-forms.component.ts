import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss']
})
export class UserFormsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  firstName:string="";
  lastName:string="";
  address:string="";
  gender:string="";
  number:string="";
  email:string="";


  ngOnInit(): void {
  
  // this.getLatestID()
  
}


  
  public addEntry() {
    console.log(this.firstName,this.lastName,this.gender,this.email,this.address,this.number);
    this.http.post(`https://adi.adicyber.com/ElectronForms/addtest`, {"firstName": this.firstName, "lastName": this.lastName,"address": this.address, "number": this.number, "email":this.email, "gender": this.gender}).subscribe( (data: any) => {
      // debugger;
      let arr =  [];
      alert("ContactAdded")
      console.log("DATA-RUNNINGNUMBER :  ", data.hello);


    });
  }


}
