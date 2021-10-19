import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-phukien',
  templateUrl: './phukien.component.html',
  styleUrls: ['./phukien.component.css']
})
export class PhukienComponent implements OnInit {
  iphone_new_less: any = [];
  air_pods_new_less: any = [];
  ipad_new_less: any = [];
  macbook_new_less:any=[];
  apple_watch_new_less:any=[];
  sim_data_wifi_new_less:any=[];
  dienthoaicu_less:any=[];
  phukien_less:any=[];
  phukien_less_name:any=[];
  iphone_new: any = [];
  air_pods_new: any = [];
  ipad_new: any = [];
  macbook_new:any=[];
  apple_watch_new:any=[];
  sim_data_wifi_new:any=[];
  dienthoaicu:any=[];
  phukien:any=[]
  constructor(private networkserviceService: NetworkserviceService) { }

  ngOnInit(): void {
    this.networkserviceService.getPhukien().subscribe(val =>{

    
      this.phukien_less = val.filter(val =>

        val.category == 'phukien' 

      )
      this.phukien_less_name = [...new Set(val.map(a => a.name))];
      console.log(this.phukien_less_name, this.phukien_less)
     
    }
     
    )

    this.networkserviceService.getAllMobile().subscribe(val =>{


      this.phukien = val.filter(val =>

        val.category == 'phukien' && val.active == true

      )


    }
     
    )
  }

}
