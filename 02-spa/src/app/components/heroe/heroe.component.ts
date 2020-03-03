import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  { 

  heroe:any ={};

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesServie: HeroesService,
              private router:Router) { 
    this.activatedRoute.params.subscribe( params => {      
      this.heroe = this._heroesServie.getHeroe(params['nombre']);
      console.log(this.heroe);
    })
  }

  verHeroes(){
    this.router.navigate(['heroes']);
  }

  // ngOnInit(): void {
  // }

}
