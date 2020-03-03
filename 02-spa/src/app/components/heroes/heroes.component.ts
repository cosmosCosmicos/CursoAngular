import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe} from '../../servicios/heroes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService: HeroesService,
              private router:Router ) { 
    console.log("constructor");
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(nombre: string){
    this.router.navigate(['/heroe',nombre]);
  }

  // buscarHeroes(termino: string){
  //   let heroesArr:Heroe[];
  //   termino = termino.toLowerCase();

  //   for(let heroe of this.heroes){
  //     let nombre = heroe.nombre.toLowerCase();
  //     if(nombre.indexOf(termino) >= 0){
  //       heroesArr.push(heroe);
  //     }

  //   }
  //   return heroesArr;
  // }

}

