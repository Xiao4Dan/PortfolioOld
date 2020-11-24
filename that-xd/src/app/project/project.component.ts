import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Output() newToggleEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  flipFace(face: String){
    console.log('flipping: ', face);
    this.newToggleEvent.emit(Number(face));
  }

}
