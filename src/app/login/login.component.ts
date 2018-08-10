import { Component, OnInit } from '@angular/core';
import {AuthService,GoogleLoginProvider} from 'angular-6-social-login';
import {RouterModule,Routes,Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService,private router:Router, private service : DataService) { }

  ngOnInit() {
  }
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      var t= this.service.getData();
      t.subscribe(data=> console.log(data));


      
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
       
        this.router.navigate(['/success']);
        localStorage.setItem("id", userData.id);
        localStorage.setItem("name", userData.name);
            
      }
    );
  }

}
