import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-servcompin',
  templateUrl: './servcompin.component.html'
})
export class ServcompinComponent implements OnInit {

  constructor(private inpServ:ServiceService) { }

  ngOnInit() {
  }

  addData(){
    this.inpServ.addDataList("hjsgdjsd");
  }

  remData(){
      this.inpServ.remDataList();
  }


}
