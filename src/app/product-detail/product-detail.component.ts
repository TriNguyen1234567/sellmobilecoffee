import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NetworkserviceService } from '../services/networkservice.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Url } from 'url';
import { ActivatedRoute, Router } from '@angular/router';

@Pipe({ name: 'safety' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title = 'appBootstrap';

  closeResult: string;

  name:String
  image1:String
  image2:String
  image3:String
  image4:String
  image5:String
  image6:String
  summary:String
  details:String
  remarks:String
  guarantee:String
  price:String
  constructor(private sanitizer: DomSanitizer,
    private networkserviceService: NetworkserviceService, private modalService: NgbModal, private route: ActivatedRoute) {
      // this.route.queryParams
      // .subscribe(params => {
      //   console.log('params', params.id[0]); // { order: "popular" }
      //   this.networkserviceService.getMobile(params.id[0]).subscribe(val => {
      //     console.log('this.data', val)
      //     this.data = val
      //     console.log('this.data', this.data)
      //     this.video = "http://tonylemobile.com/assets/images/" + this.data.video
      //     this.image1=this.data.image1
      //     this.image2=this.data.image2
      //     this.image3=this.data.image3
      //     this.image4=this.data.image4
      //     this.image5=this.data.image5
      //     this.image6=this.data.image6
      //     this.name=this.data.name
      //     this.summary=this.data.summary
      //     this.details=this.data.details
      //     this.remarks=this.data.remarks
      //     this.guarantee=this.data.guarantee
      //     this.price=this.data.price
      //   }
      //   );
  
      // }
      // )
     }


  showModal: boolean;
  showModal1: boolean;
  showModal2: boolean;
  showModal3: boolean;
  showModal4: boolean;
  showModal5: boolean;
  showModal6: boolean;
  show() {
    this.showModal = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  show1() {
    this.showModal1 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide1() {
    this.showModal1 = false;
  }
  show2() {
    this.showModal2 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide2() {
    this.showModal2 = false;
  }
  show3() {
    this.showModal3 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide3() {
    this.showModal3 = false;
  }

  show4() {
    this.showModal4 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide4() {
    this.showModal4 = false;
  }

  show5() {
    this.showModal5 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide5() {
    this.showModal5 = false;
  }

  show6() {
    this.showModal6 = true; // Show-Hide Modal Check    
  }
  //Bootstrap Modal Close event
  hide6() {
    this.showModal6 = false;
  }

  trustedDashboardUrl: SafeResourceUrl;
  data: any
  video: String

  ngOnChanges(){
    
  }

  ngOnInit(): void {
    // if (window.history.state.category != null) {
    //   this.data = window.history.state;
    //   localStorage.setItem('data', JSON.stringify(this.data))
    //   this.video = "http://tonylemobile.com/assets/images/" + this.data.video
    //   console.log("editData", this.data, this.video)
    // }
    // else {
    //   this.data = JSON.parse(localStorage.getItem('data'))
    // }

    this.route.queryParams
      .subscribe(params => {
        console.log('params', params.id[0]); // { order: "popular" }
        this.networkserviceService.getMobile(params.id[0]).subscribe(val => {
          console.log('this.data', val)
          this.data = val
          console.log('this.data', this.data)
          this.video = "http://tonylemobile.com/assets/images/" + this.data[0].video
          this.image1=this.data[0].image1
          this.image2=this.data[0].image2
          this.image3=this.data[0].image3
          this.image4=this.data[0].image4
          this.image5=this.data[0].image5
          this.image6=this.data[0].image6
          this.name=this.data[0].name
          this.summary=this.data[0].summary
          this.details=this.data[0].details
          this.remarks=this.data[0].remarks
          this.guarantee=this.data[0].guarantee
          this.price=this.data[0].price
        }
        );

      }
      )
  }
  getSafeUrl() {
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.video);
  }

}
