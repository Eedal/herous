import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-cart',
  templateUrl: './heroe-cart.component.html',
  styleUrls: ['./heroe-cart.component.css'],
})
export class HeroeCartComponent implements OnInit {
  @Input() heroe: Heroe = {
    aparicion: '',
    bio: '',
    casa: '',
    img: '',
    nombre: '',
  };

  @Input() index!: number;

  @Output() heroeSelected: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSelected = new EventEmitter();
  }

  ngOnInit(): void {}

  showHeroe() {
    // this.heroeSelected.emit(this.index)
    this.router.navigate(['/heroe', this.index]);
  }
}
