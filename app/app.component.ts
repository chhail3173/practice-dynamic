import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { C1, C2, C3, C4, C5 } from './c1-c3.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'my-practice';
  types:any = [];
  dynamicData:any;

  constructor(private httpClient: HttpClient) {
    this.getComponent()

  }


  getComponent() {
    this.httpClient.get("assets/dynamic.json").subscribe(data=>{
      this.dynamicData = data;
      console.log(this.dynamicData);      
    })
  }

  getCmp(e:any) {
    this.types.length = 0;
    console.log(e.index);
    
    for(let value of this.dynamicData) {
      console.log(value);
      if(value.process === e.tab.textLabel){
        value.components.map((data:any, index:any)=>{
          if(index === 0) {
            this.types.push(C1);
          }
          else if(index === 1) {
            this.types.push(C2);
          }
          else if(index === 2) {
            this.types.push(C3);
          }
          else if(index === 3) {
            this.types.push(C4);
          }
          else if(index === 4) {
            this.types.push(C5);
          }

        })
      

      }
      

    }

  }
}
