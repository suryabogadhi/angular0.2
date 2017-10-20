import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  dataList = ['a','b','c','d','e'];
  constructor() { }

  addDataList(newVal){
    this.dataList.push(newVal);
  }

  remDataList(){
    this.dataList.pop();
  }

}
