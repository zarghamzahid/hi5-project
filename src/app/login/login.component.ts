import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router) { }

  username : any;
  password : any;

  ngOnInit(): void {
  }

  submit(){
    var msg = "Welcome back!"
    if(this.username!=="admin" && this.password!=="123456"){
      msg = "incorrect password"
      this.username = ""
      this.password = ""
      alert(msg);
    }
    else{
      alert(msg);
      this.route.navigate([''])
    }
    

    
  }

}
