import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { map} from 'rxjs/operators'

import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //User=new UserDetails();
  url:string="https://chat.twilio.com/v2/Services"
  channel:string="https://chat.twilio.com/v2/Services/IS0696741271414db0bb484cc53df791ae/Channels"
  
    serviceId:string="IS0696741271414db0bb484cc53df791ae";
    channelId:string="CH69720c18cd0443a3a624dd6846e15009";


  user:string="vishaligujral96@gmail.com";
  channelList:any;
  constructor(private http:HttpClient) {
    //this.User=JSON.parse(localStorage.getItem("key"));

   }
    UserData ;
   canActivate()
   {
     if(localStorage.getItem('id')==='114670258576968862511' )
     {
       return true;
     }
     else
     {
       false;
     }
   }
   
  getData():Observable<any>{
    const body=new HttpParams().set('FriendlyName','Vishali');
    return this.http.post(this.url,body.toString(),httpOptions)
    }
    createChannel():Observable<any>{
      const body=new HttpParams().set('UniqueName','check');
      return this.http.post('https://chat.twilio.com/v2/Services/IS0696741271414db0bb484cc53df791ae/Channels','UniqueName=general',httpOptions)
      
    }
    Dispaly():Observable<any>{
      return this.http.get('https://chat.twilio.com/v2/Services/IS0696741271414db0bb484cc53df791ae/Channels',httpOptions)
    }
    
    AddChannel(str):Observable<any>{
      return this.http.post('https://chat.twilio.com/v2/Services/IS0696741271414db0bb484cc53df791ae/Channels','UniqueName='+str,httpOptions)
    }
    FindChannelId(str):Observable<any>{
      return this.http.get('https://chat.twilio.com/v2/Services/IS0696741271414db0bb484cc53df791ae/Channels/'+str, httpOptions)
    }
    JoinChannel(str):Observable<any>{
      return this.http.post('https://chat.twilio.com/v2/Services/IS0696741271414db0bb484cc53df791ae/Channels/'+str+'/Members', 'ChannelSid='+str+'&Identity=vishaligujral96@gmail.com&ServiceSid=IS0696741271414db0bb484cc53df791ae', httpOptions)
    }
    AddUser(str):Observable<any>{
      return this.http.get(''+str,httpOptions)  
    }
    SendMessage(str):Observable<any>{
      return this.http.post("https://chat.twilio.com/v2/Services/"+this.serviceId+"/Channels/"+this.channelId+"/Messages","ChannelSid="+this.channelId+"&ServicesSid="+this.serviceId+"&Body="+str+"&From="+this.user,httpOptions);
    } 
     
joinchannel_descript(channel_join) : Observable<any>{
  const body =new HttpParams().set('ChannelSid', channel_join.ServiceId).set("ServiceSid", channel_join.Sid).set("Identity",this.UserData.id);
  return this.http.post(channel_join.links.members,body.toString(), httpOptions)
}

    Show():Observable<any>{
      return this.http.get("https://chat.twilio.com/v2/Services/"+this.serviceId+"/Channels/"+this.channelId+"/Messages",httpOptions).pipe(map(data=>data));
    }
} 
 const httpOptions={
   headers:new HttpHeaders({
     'Content-Type':'application/x-www-form-urlencoded',
     'Authorization':'Basic QUMwZmY5MTJmZWE1MDM2OWM5YzU4NjU4N2FjY2FhZjA3YzphZWYzNTQwNGVkYWRlYWE5ZDQzYjUwMzZmODFmZGM1ZA==' 
   })
 }
