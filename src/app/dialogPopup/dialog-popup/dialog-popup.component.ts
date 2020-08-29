import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopupserviceService } from 'src/app/service/popupservice.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent implements OnInit {
  prodResponse: any;
  prodlist: any;
  optionval: any;
  storearr = [];
  total: number = 0;

  constructor(private Http: HttpClient, 
  private servicecall: PopupserviceService) {

      // serice call Subscribe method
      this.servicecall.cartchild2Subject.subscribe(data => {
      this.optionval = data;
      this.fetchProd();
    })
  }

  ngOnInit(): void {
  }

  // fetch selected item list based on conditiom
  fetchProd() {
    this.Http.get('https://www.mocky.io/v2/5eda4003330000740079ea60').subscribe(
      result => {
        this.prodResponse = result;
        this.prodlist = this.prodResponse.data;
        for (let index = 0; index < this.prodlist.length; index++) {
          for (let j = 0; j < this.optionval.length; j++) {
            if (this.optionval[j] == this.prodlist[index].id) {
              let obj = {};
              obj["name"] = this.prodlist[index].name;
              obj["price"] = Number(this.prodlist[index].price);
              this.storearr.push(obj);
              this.total += Number(this.prodlist[index].price);
            }
          }
        }
      });
  }

}
