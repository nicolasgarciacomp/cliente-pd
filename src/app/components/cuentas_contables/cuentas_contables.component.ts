import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';

@Component({
  selector: 'app-cuentas_contables',
  templateUrl: './cuentas_contables.component.html',
  styles: []
})

export class Cuentas_contablesComponent implements OnInit {

  constructor(private _api: ApiDataService) { }

  public allCuentasContables:any;
  private data:any;

  ngOnInit() {
    return this._api.getCuentasContables().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.allCuentasContables = this.data.array;
      console.log(this.allCuentasContables);
    });
  }

}
