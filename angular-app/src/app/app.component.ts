import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ButtonClickService } from './Components/services/button-click.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  json_form_repo:any

  profile = {"img":"","name":"","followers":"","following":"","url":"","bio":"No description","location":"","created":"","login":"","company":"","blog":"","repos":"","twitter":"","display":false}
  
  constructor(private http: HttpClient,private buttonClickService: ButtonClickService,private spinner: NgxSpinnerService) {}
  buttonClicked = false
  ngOnInit(){
    
    this.buttonClickService.buttonClicked$.subscribe(()=>{
      this.buttonClicked=true;
      
    })
  }

  getProfile(data:any){
   
    console.log("from child")
    console.log(data);
    this.profile = data
    this.http.post('https://backend-github-name-wovq.onrender.com/getRepo',{"name":this.profile.login}).subscribe((result)=>{
      this.json_form_repo = <Array<Object>>result
      console.log(this.profile.login)
      console.log("Iam sending this to Backend for repos")
      console.log(this.json_form_repo)
      this.spinner.hide()
  })

  }

  
  
}
