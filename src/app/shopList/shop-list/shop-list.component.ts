import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from 'src/app/dialogPopup/dialog-popup/dialog-popup.component';
import { PopupserviceService } from 'src/app/service/popupservice.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  prodResponse: any;
  prodlist: any;
  id: any;
  name: any;
  arr = [];
  cart: number = 0;
  constructor(private Http: HttpClient, 
  private dialog: MatDialog, 
  private servicall: PopupserviceService) { }

  ngOnInit(): void {
    this.fetchProd();
  }

  // fetch product list api
  fetchProd() {
    this.Http.get('https://www.mocky.io/v2/5eda4003330000740079ea60').subscribe(
      result => {
        this.prodResponse = result;
        this.prodlist = this.prodResponse.data;
        console.log("Response", this.prodlist)
      });
  }

  //add cart fun
  toggle(id) {
    for (let i = 0; i < this.prodlist.length; i++) {
      if (id == this.prodlist[i].id) {
        this.id = id;
        this.arr.push(this.id);
        this.cart++;
      }
    }
  }

  // popup fun
  openDialog() {
    let dialogRef = this.dialog.open(DialogPopupComponent, {
      width: '500px',
      panelClass: 'custom-modalbox'
    }
    );
    this.servicall.cartchildDataChanges(this.arr);
  }

}
