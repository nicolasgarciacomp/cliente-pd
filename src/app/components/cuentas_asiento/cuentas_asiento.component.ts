import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';

@Component({
  selector: 'app-cuentas_asiento',
  templateUrl: './cuentas_asiento.component.html',
  styles: []
})

export class Cuentas_asientoComponent implements OnInit {

  constructor(private _api: ApiDataService) { }

  public allCuentasAsiento:any;
  private data:any;

  ngOnInit() {
    return this._api.getCuentasAsiento().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.allCuentasAsiento = this.data.array;
      console.log(this.allCuentasAsiento);
    });
  }

}
