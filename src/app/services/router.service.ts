import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

constructor(private router : Router) { }

  toBarChart(){
    return this.router.navigate(["Chart-Bar"]);
  }

  toDoughnutChart(){
    return this.router.navigate(["Chart-Doughnut"]);
  }

  toLineChart(){
    return this.router.navigate(["Chart-Line"]);
  }
}
