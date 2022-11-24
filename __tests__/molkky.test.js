import { getRoundScore, getScore, getPlayers } from "../src/molkky";


describe("Molkky", () => {

  it("La quille 5 tombe, le score est de 5", () => {
    const quilles = [5];
    expect(getRoundScore(quilles)).toBe(5);
  });

  it("Les quilles 2, 3 et 5 tombent le score est de 3 ", () => {
    const quilles = [2, 3, 5];
    expect(getRoundScore(quilles)).toBe(3);
  });

  it("Le joueur renverse les quilles 2,3,5 puis la quille 5, le score est de  8", () => {
    const rounds = [[[2, 3, 5], [5], [0], [0], [2]]];
    expect(getScore(rounds)).toBe(10);
  });

  it("si le score dépasse 50, le score du joueur redescend à 25", () => {
    const rounds = [[[10], [10], [10], [10], [12], [10]]];
    expect(getScore(rounds)).toBe(35);
  });

  it("Si score est égale à 50", () => {
    const rounds = [[[10], [10], [10], [10], [10]]];
    expect(getScore(rounds)).toEqual("win");
  });

  it("Si un joueur fait 3 lancers sans marquer de points, le joueur est éliminé", () => {
    const rounds = [[[10], [12, 5, 2], [0], [0], [0], [10]]];
    expect(getScore(rounds)).toBe(0);
    
  });

  it("Afficher le détail de chaque lancer et le score en cours pour un joueur", () => {
    const singleplayer = [[[10], [12], [10], [0], [6], [0], [0], [2, 3]]];
    expect(getPlayers(singleplayer)).toStrictEqual([
      {
        playerNum: "player1",
        playerRoundsLength: 8,
        roundsDetails: [[10], [12], [10], [0], [6], [0], [0], [2]],
        liveScore: 40
      }
    ]);
  })

  it("Afficher le détail de chaque lancer et le score en cours pour plusieurs joueurs", () => {
    const multiPlayer = [
      [[10], [10], [10], [10], [12], [10], [2, 3, 4]], 
      [[0], [10], [0], [0], [1, 2, 3], [10]],
      [[10], [10, 11, 7, 5, 8], [10], [10, 8, 5, 9, 11], [10], [10]],
      [[1, 2, 3], [0], [0], [0], [10]]
    ]
    expect(getPlayers(multiPlayer)).toStrictEqual([
      {
        playerNum: "player1",
        playerRoundsLength: 7,
        roundsDetails: [[10], [10], [10], [10], [12], [10], [3]],
        liveScore: 38
      },
      {
        playerNum: "player2",
        playerRoundsLength: 6,
        roundsDetails: [[0], [10], [0], [0], [3], [10]],
        liveScore: 23
      },
      {
        playerNum: "player3",
        playerRoundsLength: 6,
        roundsDetails: [[10], [5], [10], [5], [10], [10]],
        liveScore: "win"
      },      
      {
        playerNum: "player4",
        playerRoundsLength: 5,
        roundsDetails: [[3], [0], [0], [0], [10]],
        liveScore: 0
      }
    ]);
  })
  
});
