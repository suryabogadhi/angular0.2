import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {QueryParamsHandling} from "@angular/router/src/config";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  proid = "";
  proname = "";
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.proid = this.route.snapshot.params['proId'];
    this.proname = this.route.snapshot.params['proName'];
    //this.proname = this.route.snapshot.queryParams['order'];
    //this.proname = this.route.snapshot.fragment;

    this.route.params.subscribe((params: Params)=>{
      //console.log(params);
      this.proid = params['proId'];
      this.proname = params['proName'];
    });
  }
}
