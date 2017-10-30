import { Injectable } from '@angular/core';

@Injectable()
export class PractserviceService {
 
 
   studentDetails = [
     {name:"surya", email:"surya@gmail.com",age:23,phone:9909090909},
     {name:"prakash", email:"prakash@gmail.com",age:28,phone:3909090909},
     {name:"raj", email:"raj@gmail.com",age:"29",phone:8909090909}
   ];


  addDataList(newVal){
    this.studentDetails.push(newVal);
  }

  removestudentidentity(ids){
    this.studentDetails.splice(ids, 1);  
  }

  


}
