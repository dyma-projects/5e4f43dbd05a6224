import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public diminuer: number;
  @Input() public augmenter: number;
  constructor() { }

  ngOnInit() {
  }


  @Output() valueChange = new EventEmitter<number>(); 
  
    changeValue(value) { 
        
        this.augmenter = value;
        this.valueChange.emit(this.augmenter);
    }

    @Output() valueChangeDim = new EventEmitter<number>(); 
  
    changeValueDim(value) { 
        
       this.diminuer = value;
        this.valueChangeDim.emit(this.diminuer);
    }

}
