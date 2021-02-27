import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //users:any;
  registerMode = false;
  constructor() { }

  ngOnInit(): void {
    //this.getUsers();
  }

  registerModeToggler(){
    this.registerMode = !this.registerMode;
  }

  // getUsers(){
  //   this.http.get("https://localhost:5001/api/users").subscribe(response => this.users = response);
  // }

  cancelRegisterForm(event: boolean){
    this.registerMode = event;
  }

}
