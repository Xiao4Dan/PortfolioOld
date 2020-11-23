import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Output() newToggleEvent = new EventEmitter<number>();
  private api = 'https://mailthis.to/Xiao4Dan'

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log('submitted!');
  }

  flipFace(face: String){
    console.log('flipping: ', face);
    this.newToggleEvent.emit(Number(face));
  }
}
