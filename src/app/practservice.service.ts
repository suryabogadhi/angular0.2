import { Injectable } from '@angular/core';
import {ServiceService} from "./service.service";

@Injectable()
export class PractserviceService {


   studentDetails = [
     {name:"surya", email:"surya@gmail.com",age:23,phone:9909090909},
     {name:"prakash", email:"prakash@gmail.com",age:28,phone:3909090909},
     {name:"raj", email:"raj@gmail.com",age:"29",phone:8909090909}
   ];

  constructor(private serv: ServiceService){}

  addDataList(newVal){
    this.studentDetails.push(newVal);
    this.serv.addDataList("hello");
    console.log(this.serv.dataList);
  }

  removestudentidentity(ids){
    this.studentDetails.splice(ids-1, 1);
  }

}
