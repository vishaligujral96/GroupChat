import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModule } from '@angular/core';





@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
 
 //message:string="";
  constructor(private service:DataService)  { }
 // User=new UserDetails();
 messages=[];
  ngOnInit()
   {
    setInterval
    this.Show();

   }
  
   str:string;
   channel:string;
   Message() 
   {
    this.service.SendMessage(this.str).subscribe(res=>{
      console.log(res);
    },
    err=>{
      console.log(err);
    } )
    //ShowMessages();
  }
  add(){
    this.service.AddChannel(this.channel).subscribe(res1=>{
      console.log(res1);   
     },
    err=>{
      console.log(err);
    } )

  }

  
  Show()
  {
   
   this.service.Show().subscribe(res1=>{
      console.log(res1); 
      let length =res1.messages.length;
      //var i;
      //var messages[]

      for(let index=0;index<length;index++)
      {
        this.messages.push(res1.messages[index].body);
      }
     }),
    err=>{
      console.log(err);
    } 

  }




}
