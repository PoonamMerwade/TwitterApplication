import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flag= false;
  constructor(private userService:UserServiceService) {

   }

  ngOnInit(): void {
  this.userService.setFlag(false);
    this.userService.getFlag().subscribe(flag => {

      this.flag=flag;
    });
  }
}