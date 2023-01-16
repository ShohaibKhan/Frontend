import { Component,Input, OnInit } from '@angular/core';
import { ButtonClickService } from '../services/button-click.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  buttonClicked = false

  constructor(private buttonClickService: ButtonClickService){}
  ngOnInit() {

    this.buttonClickService.buttonClicked$.subscribe(()=>{
      this.buttonClicked=true;
    })
    
    };
  @Input() prof   = {"img":"","name":"","followers":"","following":"","url":"","bio":"No description","location":"","created":"","login":"","company":"","blog":"","repos":"","twitter":"","display":false}
}