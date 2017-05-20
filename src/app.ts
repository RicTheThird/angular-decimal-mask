//our root app component
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {DecimalMask} from "./decimal-mask.directive";

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <input decimal [(ngModel)]="Amount"
        class="form-control" id="Amount" name="Amount" tabindex="4" autocomplete="off">
      <div>{{Amount}}</div>
    </div>
  `
})
export class App {
  name:string;
  Amount: number;
  constructor() {
    this.name = 'Angular2';
  }
  
  ngDoCheck() {
    console.log(this.Amount);
    if(this.Amount) {
      this.Amount = this.Amount.replace(/[A-Za-z]/g, '');
      if(this.Amount.indexOf('.') !== -1) {
        var arrayVals = this.Amount.split('.');
        this.Amount = arrayVals[0] + "." + arrayVals[1].slice(0,2);
      }
    }
    console.log('replace to =>'+this.Amount);
  }
}

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ App, DecimalMask ],
  bootstrap: [ App ]
})
export class AppModule {}