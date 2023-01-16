import { Component, OnInit,Input } from '@angular/core';
import { ButtonClickService } from '../services/button-click.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input() repos:any
  data : any
  totalRepos:any
  p:number=1;
  buttonClicked = false
  constructor(private buttonClickService: ButtonClickService){
  
  }
  ngOnInit(){
    this.buttonClickService.buttonClicked$.subscribe(()=>{
      console.log("Iam repos")
      this.buttonClicked=true;
      this.data = <Array<Object>>this.repos
      
      this.totalRepos =  this.data.length
    })

    
  }
  

}
