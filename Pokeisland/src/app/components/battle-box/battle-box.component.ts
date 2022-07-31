import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle-box',
  templateUrl: './battle-box.component.html',
  styleUrls: ['./battle-box.component.css']
})
export class BattleBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userPokemonAtk() {
    document.getElementById('usrPokemonPic')?.classList.toggle('usrAnimated');
    this.enemyPokemonAtk();
  }

  enemyPokemonAtk() {
    document.getElementById('enemyPokemonPic')?.classList.toggle('enmyAnimated');
  }
}
