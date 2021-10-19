import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tonyle-mobile',
  templateUrl: './tonyle-mobile.component.html',
  styleUrls: ['./tonyle-mobile.component.css']
})
export class TonyleMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  hide()
  {
    alert("Bạn đã đăng ký nhận tin khuyến mãi thành công")
  }
}
