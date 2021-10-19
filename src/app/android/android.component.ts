import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {
  iphone_new_less: any = [];
  android_less: any = [];
  android_less_name: any = [];
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
  android:any=[];
  constructor(private networkserviceService: NetworkserviceService) { }

  ngOnInit(): void {
    this.networkserviceService.getAndroid().subscribe(val =>{

  
      this.android_less = val.filter(val =>

        val.category == 'android' 

      )
      this.android_less_name = [...new Set(val.map(a => a.name))];
      console.log(this.android_less_name, this.air_pods_new_less)
    }
     
    )

    this.networkserviceService.getAllMobile().subscribe(val =>{

    
      this.android = val.filter(val =>

        val.category == 'android' && val.active == true

      )
    }
     
    )
  }

}
