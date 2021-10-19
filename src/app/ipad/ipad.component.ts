import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-ipad',
  templateUrl: './ipad.component.html',
  styleUrls: ['./ipad.component.css']
})
export class IpadComponent implements OnInit {

  iphone_new_less: any = [];
  air_pods_new_less: any = [];
  ipad_new_less: any = [];
  ipad_new_less_name: any = [];
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

  constructor(private networkserviceService: NetworkserviceService) { }

  ngOnInit(): void {

    this.networkserviceService.getIpad().subscribe(val =>{

    
      this.ipad_new_less = val.filter(val =>

        val.category == 'ipad_new' 

      )
      this.ipad_new_less_name = [...new Set(val.map(a => a.name))];
      console.log(this.ipad_new_less_name, this.dienthoaicu_less)
      
    }
     
    )

    this.networkserviceService.getAllMobile().subscribe(val =>{


      this.ipad_new = val.filter(val =>

        val.category == 'ipad_new' && val.active == true

      )


    }
     
    )
  }
  

}
