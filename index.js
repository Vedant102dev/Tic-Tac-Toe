let btn = document.querySelectorAll(".btn");
const reset = document.querySelector(".reset");
let playerO = true;
const statusText = document.querySelector("h2");
const winningArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

btn.forEach((clk) => {
  clk.addEventListener("click", () => {
    if (playerO) {
      clk.innerText = "O";
      statusText.innerHTML = "<span class='player'>X </span>Player 2 turn";
      document.querySelector("span").style.color = "Red";
      playerO = false;
    } else {
      clk.innerText = "X";
      clk.style.color = "Red";
      statusText.innerHTML = "<span class='player'>O </span>Player 1 turn";
      playerO = true;
    }
    clk.disabled = true;
    checkWinner();
  });
});

function checkWinner() {
  for (let position of winningArray) {
    if (
      btn[position[0]].innerText === "O" &&
      btn[position[1]].innerText === "O" &&
      btn[position[2]].innerText === "O"
    ) {
      statusText.innerHTML =
        "Congratulations,<span class='player'> O </span>Player 1 is Winner.";
      btn.forEach((b) => (b.disabled = true));
      return;
    } else if (
      btn[position[0]].innerText === "X" &&
      btn[position[1]].innerText === "X" &&
      btn[position[2]].innerText === "X"
    ) {
      statusText.innerHTML =
        "Congratulations,<span class='player'> X </span>Player 2 is Winner.";
      document.querySelector("span").style.color = "Red";
      btn.forEach((b) => (b.disabled = true));
      return;
    }
  }
  if (
    btn[0].innerText != "" &&
    btn[1].innerText != "" &&
    btn[2].innerText != "" &&
    btn[3].innerText != "" &&
    btn[4].innerText != "" &&
    btn[5].innerText != "" &&
    btn[6].innerText != "" &&
    btn[7].innerText != "" &&
    btn[8].innerText != ""
  ) {
    statusText.textContent = "Game Draw";
  }
}

reset.addEventListener("click", () => {
  location.reload();
});
