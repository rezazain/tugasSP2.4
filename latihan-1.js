var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const force = personnel.filter((User) => User.isForceUser === true);
const totalSkor = force.reduce(
  (acc, shoot) => acc + shoot.pilotingScore + shoot.shootingScore,
  0
);

document.write("Force User" + "<br>");

let pilot = personnel.map(function (people) {
  return document.write(`
    <br>
        ID : ${people.id} <br>
        Name : ${people.name} <br>
        PilotingScore : ${people.pilotingScore} <br>
        ShootingScore : ${people.shootingScore} <br>
        IsForceUser : ${people.isForceUser} <br>
        TotalScore : ${people.pilotingScore + people.shootingScore} <br>
    <br>
    `);
});
document.write(`totalSkor User Force : ${totalSkor} `);
