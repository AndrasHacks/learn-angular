import { Component, OnInit } from "@angular/core";
import Hero from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Hero[];
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  // Constructor should not fetch any data at all, just init the class.
  ngOnInit() {
    this.getHeroes();
  }
}
