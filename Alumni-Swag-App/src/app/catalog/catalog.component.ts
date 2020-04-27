import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
}
export const Product = [
  { id: 1, name: 'Tshirt', image: ''},
  { id: 2, name: 'Mug', image: ''}, 
  { id: 3, name: 'Sticker', image: ''}
]
