import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {
  SocialLoginModule,AuthServiceConfig,GoogleLoginProvider} from "angular-6-social-login";
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';


  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig(
        [
          
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("243671258288-4hccb05h5vhbfl33i3pfgd2r37607nhm.apps.googleusercontent.com")
          } ]
    );
    return config;
  }
  const routes:Routes=[{
    path:'',
    component: LoginComponent ,
    
  },
  {
    path:'success',
    component: SuccessComponent ,
    
  },

  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
