import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
})
export class FinderComponent implements OnInit {
  heroes: Heroe[] = [];
  value = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.value = params['value'];
      this.heroes = this.heroesService.findHeroes(params['value']);
    });
  }
}
