import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-sanphamkhac',
  templateUrl: './sanphamkhac.component.html',
  styleUrls: ['./sanphamkhac.component.css']
})
export class SanphamkhacComponent implements OnInit {
  iphone_new_less: any = [];
  sanphamkhac_less: any = [];
  sanphamkhac_less_name: any = [];
  air_pods_new_less: any = [];
  ipad_new_less: any = [];
  macbook_new_less:any=[];
  apple_watch_new_less:any=[];
  sim_data_wifi_new_less:any=[];
  dienthoaicu_less:any=[];
  iphone_new: any = [];
  air_pods_new: any = [];
  ipad_new: any = [];
  macbook_new:any=[];
  apple_watch_new:any=[];
  sim_data_wifi_new:any=[];
  dienthoaicu:any=[];
  sanphamkhac:any=[];
  showModal:boolean;
  constructor(private networkserviceService: NetworkserviceService) { }

  ngOnInit(): void {
    this.networkserviceService.getSanphamkhac().subscribe(val =>{

      
     
      this.sanphamkhac_less = val.filter(val =>

        val.category == 'sanphamkhac' 

      )
      this.sanphamkhac_less_name = [...new Set(val.map(a => a.name))];
      console.log(this.sanphamkhac_less_name, this.sanphamkhac_less)
    }
     
    )

    this.networkserviceService.getAllMobile().subscribe(val =>{

      
     
      this.sanphamkhac = val.filter(val =>

        val.category == 'sanphamkhac' && val.active == true

      )
    }
     
    )
  }

}
