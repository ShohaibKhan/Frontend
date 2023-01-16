import { Component,Output,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ButtonClickService } from '../services/button-click.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() getProfile:EventEmitter<object>= new EventEmitter()
  regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  valid = false
  title = 'angular-app';
  json_form = ""
  json_form_repo = ""
  prof = {"img":"","name":"","followers":"","following":"","url":"","bio":"No description","location":"","created":"","login":"","company":"","blog":"","repos":"","twitter":"","display":false}
  constructor(private http: HttpClient,private buttonClickService: ButtonClickService,private spinner: NgxSpinnerService){


  }
  onButtonClick() {
    this.buttonClickService.buttonClickedEvent();

  }

  onSubmit(data: {name:string}){

    console.log(Object.keys(this.prof).length)



    if (!this.regex.test(data.name) ){
      this.valid = true
      alert("Please Enter valid username")
      
    }
    else{
      this.spinner.show()
      this.http.get('https://api.github.com/users/'+data.name).subscribe((result)=>{
        this.json_form = JSON.stringify(result)
        console.log(this.json_form)
        this.prof.img = JSON.parse(this.json_form)["avatar_url"]
        this.prof.name = JSON.parse(this.json_form)["name"]
        this.prof.followers = JSON.parse(this.json_form)["followers"]
        this.prof.following = JSON.parse(this.json_form)["following"]
        this.prof.url = JSON.parse(this.json_form)["html_url"]
        this.prof.bio = JSON.parse(this.json_form)["bio"]
        this.prof.location = JSON.parse(this.json_form)["location"]
        this.prof.created = JSON.parse(this.json_form)["created_at"].split("T")[0]
        this.prof.login = JSON.parse(this.json_form)["login"]
        this.prof.company = JSON.parse(this.json_form)["company"]
        this.prof.blog = JSON.parse(this.json_form)["blog"]
        this.prof.repos = JSON.parse(this.json_form)["public_repos"]
        this.prof.twitter = JSON.parse(this.json_form)["twitter_username"]
        this.prof.display=true
        this.getProfile.emit(this.prof)
      })
    }
      
    
    
  }


}
