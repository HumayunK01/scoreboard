const IPL = [
  {
    TeamA: {
      team: "rcb",
      captain: "Virat",
      score: 160,
      isWinning: true,
    },
    TeamB: {
      team: "csk",
      captain: "Dhoni",
      score: 150,
      isWinning: false,
    },
  },
  {
    TeamA: {
      team: "rcb",
      captain: "Virat",
      score: 120,
      isWinning: false,
    },
    TeamB: {
      team: "csk",
      captain: "Dhoni",
      score: 170,
      isWinning: true,
    },
  },
];

const ul = document.createElement("ul");
for (let match of IPL) {
  console.log(match);
  const { TeamA: Team1, TeamB: Team2 } = match;
  console.log("Team1", Team1);
  console.log("Team2", Team2);

  const { team: T1, captain: cap1, score: T1Score } = Team1;
  const { team: T2, captain: cap2, score: T2Score } = Team2;
  console.log("T1", T1);
  console.log("cap1", cap1);
  console.log("T1Score", T1Score);
  console.log("T2", T2);
  console.log("cap2", cap2);
  console.log("T2Score", T2Score);

  const teamNames = `${T1} vs. ${T2}`;

  if (T1Score > T2Score) {
    teamScores = `<b>${T1Score}</b> - ${T2Score}`;
  } else {
    teamScores = `${T1Score} - <b>${T2Score}</b>`;
  }

  const myFavouriteTeam = T2 === "csk" ? Team2 : Team1;
  const li = document.createElement("li");
  li.classList.add(myFavouriteTeam.isWinning ? "winningTeam" : "losingTeam");

  li.innerHTML = `${teamNames} = ${teamScores}`;
  ul.append(li);
}
document.body.append(ul);
