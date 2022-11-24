// L'objectif est de créer une fonction qui calcule les points en fonction des lancers

// # s'il fait tomber une quille, il marque la valeur de la quille, 
// # s'il fait tomber plusieurs quilles, il marque le nombre de quilles tombées.

// ## Règles

// le jeu comporte 12 quilles numérotées de 1 à 12

// - si 1 quille est tombée, le joueur marque les points inscrits sur la quille tombée
// - si n quilles sont tombées (avec n > 1), le joueur marque n points.
// - si le joueur fait 2 lancers, le score total doit cumuler le score des deux lancers

// - si le score dépasse 50, le score du joueur redescend à 25
// - si le score est exactement 50, le joueur remporte la partie
// - si un joueur fait 3 lancers sans marquer de points, le joueur est éliminé

// #### Pour aller plus loin

// - Une partie peut être jouée par 1 ou n joueurs
// - Afficher le score en cours pour chaque joueur
// - Afficher le détail de chaque lancer et le score total en cours pour chaque joueur


export function getRoundScore(rounds) {
  return rounds.length > 1 ? rounds.length : rounds[0];
}


export function getScore(playerRounds) {
  let result = 0
  let checkIfLose = 0

    for(const rounds of playerRounds) {
      rounds.forEach(round => {
        round[0] === 0 ? (checkIfLose++) : checkIfLose < 3 && (checkIfLose = 0, result += getRoundScore(round));
        result > 50 && (result = 25)
      });
    }

  checkIfLose >= 3 ? (result = 0) : result === 50 && (result = "win")

  return result
}


export function getPlayers(players) {
  let playerStat = []
  let playerNum = 0

  for(const player of players) {
    let liveScore = 0
    let roundsDetails = []

    playerNum += 1
    liveScore = getScore([player])

    for (let rounds of player) {
      roundsDetails.push([getRoundScore(rounds)])
    }

    playerStat.push(playerStats("player"+playerNum, player.length, roundsDetails, liveScore))
  }

  return playerStat
}


function playerStats(playerNum, playerRoundsLength, roundsDetails, liveScore) {
  return { playerNum, playerRoundsLength, roundsDetails, liveScore };
}