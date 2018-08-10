import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModule } from '@angular/core';





@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
 
 
  constructor(private service:DataService)  { }
 
 
 messages=[];
  ngOnInit()
   {
    
    this.Show();
    this.showChannelList()

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


  channelArray = [];

  //this function displays the channels which have been made

  showChannelList() {
    this.service.Dispaly().subscribe(res => {

      // console.log(res.channels[0].unique_name);
      var len = res.channels.length;
      for (let index = 0; index < len; index++) {
        this.channelArray[index] = res.channels[index].unique_name;
        // console.log( JSON.stringify(this.channelArray[index]));
      }
    },
      err => {
        console.log(err);
      })
  }





}
