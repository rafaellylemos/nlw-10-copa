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
  createCard("22/11", "terça", createGame("france", "16:00", "australia")) +
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "26/11",
    "sábado",
    createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard("27/11", "domingo", createGame("spain", "16:00", "germany")) +
  createCard(
    "28/11",
    "segunda",
    createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard("02/12", "sexta", createGame("cameroon", "16:00", "brazil"))
