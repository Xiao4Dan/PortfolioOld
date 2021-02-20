import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { element } from 'protractor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Output() newToggleEvent = new EventEmitter<number>();

  flip:number;
  currentPage: any;

  constructor() {
    this.currentPage = 0;
  }

  ngOnInit(): void {
    document.querySelector('.landing-Card').classList.add('inview');
    document.getElementById('card-Indicator').classList.add('inview');
  }
  onWindowScroll(event:any){
    //event.target.clientHeight/offsetHeight is the height of viewport
    //event.target.scrollHeight is total height
    //event.target.scrollTop is how far down it's scrolled
    const card = document.querySelector('.landing-Card');
    const cardIndicator = document.getElementById('card-Indicator');
    const skills = document.querySelector('.landing-Skills');
    const skillsIndicator = document.getElementById('skills-Indicator');
    const projects = document.querySelector('.landing-Projects');
    const projectsIndicator = document.getElementById('projects-Indicator');
    const contact = document.querySelector('.landing-Contact');
    const contactIndicator = document.getElementById('contact-Indicator');
    const elements = [card, skills, projects, contact];
    const indicators = [cardIndicator, skillsIndicator, projectsIndicator, contactIndicator];
    //currentPosition calculates the index of which element is inview
    //is triggered when more than half of the element is scrolled into view
    var currentPosition = Math.round(event.target.scrollTop * elements.length / event.target.scrollHeight);
    console.log(currentPosition);
    if(currentPosition != this.currentPage){
      elements[this.currentPage].classList.remove('inview');
      indicators[this.currentPage].classList.remove('inview');
      elements[currentPosition].classList.add('inview');
      indicators[currentPosition].classList.add('inview');
      this.currentPage = currentPosition;
    }
  }
  flipFace(face: String){
    console.log('flipping: ', face);
    this.newToggleEvent.emit(Number(face));
  }

  avatar(event: any, action: String){
    if(action === 'over'){
      event.target.setAttribute('src', '/assets/wink-bigheads.svg');
    }else if(action === 'out'){
      event.target.setAttribute('src', '/assets/masked-bigheads.svg');
    }else if(action === 'link'){
      window.open("https://bigheads.io/", "__blank");
    }
  }

  bmc(){
    window.open('https://www.buymeacoffee.com/thatxd', "_blank");
  }

}
