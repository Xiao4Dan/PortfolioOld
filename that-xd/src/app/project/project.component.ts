import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Output() newToggleEvent = new EventEmitter<number>();

  currentPosition: any; //n% of page it has scrolled

  constructor() {
    this.currentPosition = 0;
  }

  ngOnInit(): void {
  }

  flipFace(face: String){
    console.log('flipping: ', face);
    this.newToggleEvent.emit(Number(face));
  }

  onWindowScroll(event:any){
    //event.target.clientHeight/offsetHeight is the height of viewport
    //event.target.scrollHeight is total height
    //event.target.scrollTop is how far down it's scrolled
    var position = Math.round(event.target.scrollTop * 100 / (event.target.scrollHeight - event.target.offsetHeight));
    if(position != this.currentPosition){
      this.currentPosition = position;
    }
    var background = document.getElementById("background");
    if(this.currentPosition >= 25 && this.currentPosition <= 75){
      background.style.filter = "blur(25px)";
    }else if(this.currentPosition < 25){
      background.style.filter = "blur("+ this.currentPosition % 25 +"px)";
    }else{
      background.style.filter = "blur("+ (25 - (this.currentPosition - 1) % 25) +"px)";//to leave the bottom clearer
    }
  }

}
