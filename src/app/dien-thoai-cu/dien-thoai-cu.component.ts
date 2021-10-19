import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-dien-thoai-cu',
  templateUrl: './dien-thoai-cu.component.html',
  styleUrls: ['./dien-thoai-cu.component.css']
})
export class DienThoaiCuComponent implements OnInit {

  iphone_new_less: any = [];
  air_pods_new_less: any = [];
  ipad_new_less: any = [];
  macbook_new_less:any=[];
  apple_watch_new_less:any=[];
  sim_data_wifi_new_less:any=[];
  dienthoaicu_less:any=[];
  dienthoaicu_less_name:any=[];
  iphone_new: any = [];
  air_pods_new: any = [];
  ipad_new: any = [];
  macbook_new:any=[];
  apple_watch_new:any=[];
  sim_data_wifi_new:any=[];
  dienthoaicu:any=[];

  constructor(private networkserviceService: NetworkserviceService) { }

  ngOnInit(): void {
    this.networkserviceService.getDienthoaicu().subscribe(val =>{

      
     
      this.dienthoaicu_less = val.filter(val =>

        val.category == 'dienthoaicu' 

      )
      this.dienthoaicu_less_name = [...new Set(val.map(a => a.name))];
      console.log(this.dienthoaicu_less_name, this.dienthoaicu_less)
      
    }
     
    )

    this.networkserviceService.getAllMobile().subscribe(val =>{

      
     
      this.dienthoaicu = val.filter(val =>

        val.category == 'dienthoaicu' && val.active == true

      )
    }
     
    )
  }

}
