interface Player {
  id: "ID";
  name: string;
  permissions: UserPermissions;
}

interface UserPermissions {
  game1: boolean;
  game2: boolean;
}

interface Game {
  id: "ID";
  host: "PlayerID";
  ready: boolean;
  gameKey: string;
  players: Player[];
  questions: Question[];
}

interface Question {
  id: "ID";
  question: string;
  gamePlayers: GamePlayer[];
  completed: boolean;
}

interface GamePlayer {
  id: "ID";
  name: string;
  votes: number;
  answer: string;
  isSelected: boolean;
}

/*
  * How do you know if the host has permissions to start that game?
  - Upon login the UI will reflect what games can be accessed for that player ID.

  * How can other players join the game?
  - Host gives other players game secret, which when entered adds their player entity to the Player list.

  * How do you know when the game has started?
  - If the host clicks 'ready' a flag will be set on the Game Object.

  * How do you know when all players have answered?
  - when all game players answer field is not null;

  * How do you know which player won that question?
  - Display all answers and then based on the votes that answer recieved (counter incremented from user clicks on answer);

  * How do you know when to move onto the next question?
  - a completed flag will be set on question object once winning animations complete.

  * How do you know when a game has ended?
  - a game has ended after the 10th question has its completed flag set,

  * How do you know who won the game?
  - The winner is the max tally of all votes of all questions.
*/
