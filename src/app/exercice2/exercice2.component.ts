import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit, AfterViewInit {
  public valeur: string;
  @ViewChild('f', { static: true }) public el: ElementRef;

  constructor() {
    
   }

  ngOnInit() {
      
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("valeur:", this.el.nativeElement.value);
    
  }

showValeur(){
  this.valeur = this.el.nativeElement.value;
}



}
