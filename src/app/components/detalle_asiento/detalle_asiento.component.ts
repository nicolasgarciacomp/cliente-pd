import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';

@Component({
  selector: 'app-detalle_asiento',
  templateUrl: './detalle_asiento.component.html',
  styles: []
})

export class Detalle_asientoComponent implements OnInit {

  constructor(private _api: ApiDataService) { }

  public allDetalleAsiento:any;
  private data:any;

  ngOnInit() {
    return this._api.getDetalleAsiento().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.allDetalleAsiento = this.data.array;
      console.log(this.allDetalleAsiento);
    });
  }

}
