import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getInfo();
  }

  ngDoCheck(): void {
      this.getInfo();
  }
  active = 1;
  token:string = "";
  role:string = "";
  name:string = "";
  logoff(){
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("name");
    //   localStorage.removeItem("role");
      localStorage.clear();
      this.active = 1;
  }
  getInfo(){
    //   if(this.token){
    this.token = localStorage.getItem("token");
    this.name = localStorage.getItem("name");
    this.role = localStorage.getItem("role");
    //   }
  }

}
