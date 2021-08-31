import { RouterService } from './../services/router.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routerServ : RouterService) { }

  ngOnInit() {
  }

  redirectBar(){
    this.routerServ.toBarChart();
  }

  redirectLine(){
    this.routerServ.toLineChart();
  }

  redirectDoughnut(){
    this.routerServ.toDoughnutChart();
  }
}
