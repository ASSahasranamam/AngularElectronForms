import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {

  constructor(private http: HttpClient) { }

  allEntries:any=[];
  ngOnInit(){

    this.getAllEntities();
  }
  public  async getAllEntities() {
    // console.log(this.firstName,this.lastName,this.gender,this.email,this.address,this.number);
    await this.http.post(`http://localhost:3000/getAll`, {}).subscribe( (response: any) => {
      // debugger;
      let arr =  [];

      if (response.success ==true) {
        console.log(response.data);
        this.allEntries = response.data;
      } else{
        alert(response.error);
      }



    });
  }



}
