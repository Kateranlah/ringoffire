export class Game {
  public players: string[] = []
  public stack: string[] = []
  public playedCards: string[] = []
  public currenPlayer: number = 0

  constructor(){
    for (let i = 0; i < 14; i++) {
        this.stack.push('spade_' + i)
        this.stack.push('hearts_' + i)
        this.stack.push('clubs_' + i)
        this.stack.push('diamonds_' + i)
    }
   
    shuffle(this.stack);
  }
}


function shuffle(stack) {
  stack.sort(() => Math.random() - 0.5);
  console.log(stack);
  
}
