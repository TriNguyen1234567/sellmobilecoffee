import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-sim-data',
  templateUrl: './sim-data.component.html',
  styleUrls: ['./sim-data.component.css']
})
export class SimDataComponent implements OnInit {

  iphone_new_less: any = [];
  air_pods_new_less: any = [];
  ipad_new_less: any = [];
  macbook_new_less:any=[];
  apple_watch_new_less:any=[];
  sim_data_wifi_new_less:any=[];
  sim_data_wifi_new_less_name:any=[];
  dienthoaicu_less:any=[];
  iphone_new: any = [];
  air_pods_new: any = [];
  ipad_new: any = [];
  macbook_new:any=[];
  apple_watch_new:any=[];
  sim_data_wifi_new:any=[];
  dienthoaicu:any=[];

  constructor(private networkserviceService: NetworkserviceService,private router: Router ) { }

  ngOnInit(): void {

    this.networkserviceService.getAllMobileLess().subscribe(val =>{

      this.iphone_new_less = val.filter(val =>

        val.category == 'iphone_new' && val.active == true

      ),
      this.air_pods_new_less = val.filter(val =>

        val.category == 'air_pods_new' && val.active == true

      ),
      this.ipad_new_less = val.filter(val =>

        val.category == 'ipad_new' && val.active == true

      )
      this.macbook_new_less = val.filter(val =>

        val.category == 'macbook_new' && val.active == true

      )
      this.apple_watch_new_less = val.filter(val =>

        val.category == 'apple_watch_new' && val.active == true

      )
      this.sim_data_wifi_new_less = val.filter(val =>

        val.category == 'sim_data_wifi_new' 

      )
      this.sim_data_wifi_new_less_name = [...new Set(val.map(a => a.name))];
      console.log(this.sim_data_wifi_new_less_name, this.iphone_new_less)
      
     
      this.dienthoaicu_less = val.filter(val =>

        val.category == 'dienthoaicu' && val.active == true

      )
    }
     
    )

    this.networkserviceService.getAllMobile().subscribe(val =>{

      this.iphone_new = val.filter(val =>

        val.category == 'iphone_new' && val.active == true

      ),
      this.air_pods_new = val.filter(val =>

        val.category == 'air_pods_new' && val.active == true

      ),
      this.ipad_new = val.filter(val =>

        val.category == 'ipad_new' && val.active == true

      )
      this.macbook_new = val.filter(val =>

        val.category == 'macbook_new' && val.active == true

      )
      this.apple_watch_new = val.filter(val =>

        val.category == 'apple_watch_new' && val.active == true

      )
      this.sim_data_wifi_new = val.filter(val =>

        val.category == 'sim_data_wifi_new' && val.active == true

      )
     
     
      this.dienthoaicu = val.filter(val =>

        val.category == 'dienthoaicu' && val.active == true

      )
    }
     
    )

  }

}
