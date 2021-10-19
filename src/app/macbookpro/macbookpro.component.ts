import { Component, OnInit } from '@angular/core';
import { NetworkserviceService } from '../services/networkservice.service';

@Component({
  selector: 'app-macbookpro',
  templateUrl: './macbookpro.component.html',
  styleUrls: ['./macbookpro.component.css']
})
export class MacbookproComponent implements OnInit {

  iphone_new_less: any = [];
  macbookpro_less: any = [];
  macbookpro_less_name: any = [];
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
  macbookpro:any=[]

  constructor(private networkserviceService: NetworkserviceService) { }

  ngOnInit(): void {

    this.networkserviceService.getMacbookPro().subscribe(val =>{

  
      this.macbookpro_less = val.filter(val =>

        val.category == 'macbookpro' 

      )
      this.macbookpro_less_name = [...new Set(val.map(a => a.name))];
      console.log(this.macbookpro_less_name, this.macbookpro_less)
     
    }
     
    )

    this.networkserviceService.getAllMobile().subscribe(val =>{

     
      this.macbookpro = val.filter(val =>

        val.category == 'macbookpro' && val.active == true

      )
    
    }
     
    )
  }

}
