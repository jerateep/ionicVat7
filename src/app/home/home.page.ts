import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  vatResult = 0;

  calculate(money){
    let result = money * 107/100;
    this.vatResult = result;
    //alert(money);
  }

}
