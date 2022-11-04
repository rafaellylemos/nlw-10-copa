function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong> ${hour} </strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>   
     <div class="namesCountries">
     <label>${player1}</label> <label>${player2}</label>
     </div>
  `
}

function createCard(date, day, games) {
  let delay = -9.4
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: 3s">
      <h2>${date} <span> ${day} </span></h2>
      <ul>
      ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("22/11", "terça", createGame("France", "16:00", "Australia")) +
  createCard("24/11", "quinta", createGame("Brazil", "16:00", "Serbia")) +
  createCard(
    "26/11",
    "sábado",
    createGame("France", "13:00", "Denmark") +
      createGame("Argentina", "16:00", "Mexico")
  ) +
  createCard("27/11", "domingo", createGame("Spain", "16:00", "Germany")) +
  createCard(
    "28/11",
    "segunda",
    createGame("Switzerland", "13:00", "Brazil") +
      createGame("Portugal", "16:00", "Uruguay")
  ) +
  createCard("02/12", "sexta", createGame("Cameroon", "16:00", "Brazil"))
