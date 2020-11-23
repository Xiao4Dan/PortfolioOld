import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  face = 0;
  faces = ["show-front","show-right","show-top"];

  toggleFace(e): void{
    console.log(this.face % 3);
    console.log(document.getElementById("cube"));
    document.getElementById("cube").classList.remove(this.faces[this.face]);
    this.face = (this.face + 1 ) % 3;
    document.getElementById("cube").classList.add(this.faces[this.face]);
  }

  setFace(f:number):void{
    document.getElementById("cube").classList.remove(this.faces[this.face]);
    this.face = f;
    document.getElementById("cube").classList.add(this.faces[this.face]);
  }

}
