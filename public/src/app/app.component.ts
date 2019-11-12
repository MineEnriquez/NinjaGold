import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ninja Gold';
  transactions: any = [];
  scores: any = [];
  topvalues: any = [];
  points = 0;
  randNum: number;
  first_name: string;
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    
    console.log("Points:", this.points)
    this.first_name = 'enter your name';
    let observable = this._httpService.e2endtest({ data: 8 });
    observable.subscribe(data => console.log("Got our data!", data));

    let observable2 = this._httpService.retriveAll();
    observable2.subscribe(data => {
      console.log("Got our data back from the service!", data)
      let games: any = [];
      games = data;
      let maxpoints = 0;
      var topplayer = "";
        for(let game of games){
          this.scores.push(game.totalPoints);
            if(game.totalPoints > maxpoints){
              maxpoints = game.totalPoints;
              topplayer = game.name;
            }
        }
        this.title = `${topplayer} (${maxpoints} points)` ;
        console.log(this.scores);
        this.topvalues = this.scores.sort((a,b) => b-a).slice(0,5);
          console.log(this.topvalues); 
    });

  }
  btnSessionSave(playerName: HTMLInputElement){

    let newgame = {
      name : playerName.value,
      totalPoints : this.points,
      transactions: this.transactions
    }
    console.log("sending...");
    console.log(newgame);
    let observable = this._httpService.newGame(newgame);
    observable.subscribe(data => console.log("Got our data back from the service!", data));
  }
  
  btnPlay(event) {
    let caller = <HTMLTextAreaElement>event.target;
    let from = 0;
    let to = 0;
    let plusOrMinus = 1;
    let action = "earned";
    if (caller.name == "Farm") {
      from = 2; to = 4;
      plusOrMinus = 1; 
    }
    else if (caller.name == "Cave") {
      from = 5; to = 6;
      plusOrMinus = 1; 
    }
    else if (caller.name == "House") {
      from = 7; to = 8;
      plusOrMinus = 1; 
    }
    else if (caller.name == "Casino") {
      from = 1; to = 100;
      plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      
    }
    this.randNum = Math.floor((Math.random() * to) + from);
    this.randNum = this.randNum * plusOrMinus;
    this.points += this.randNum;
    action = plusOrMinus === 1 ? "earned" : "lost";
    this.transactions.push({action: action, entry: `You've ${action} ${this.randNum * plusOrMinus} at the ${caller.name}`})
  }
}
