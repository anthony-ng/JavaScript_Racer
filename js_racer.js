window.onload = function() {
  document.addEventListener('keyup', keypress, false);
  var input = prompt("How many steps?")

  function createRow(input) {
    var row1 = document.getElementById('racer1_strip');
    for (var i=0; i < input; i++) {
      row1.insertCell(-1)
    };
    var row2 = document.getElementById('racer2_strip');
    for (var i=0; i < input; i++) {
      row2.insertCell(-1)
    }
  };
  createRow(input);
  alert("Start game!");
}

function keypress(e) {
  if (e.which == 81) {
    updatePlayerPosition("racer1_strip")
  } else if (e.which == 80) {
    updatePlayerPosition("racer2_strip")
  }
}

function updatePlayerPosition(player) {
  document.getElementById(player).querySelector(".active").nextElementSibling.className = "active";
  document.getElementById(player).querySelector(".active").removeAttribute("class");

  var td = document.getElementsByTagName('td') // will select all tds in
  document
  var player1Start = td[0] // starting position for player 1
  var player2Start = td[(td.length) / 2] // starting position for player 2
  var player1End = td[(td.length / 2) - 1] // ending position for player 1
  var player2End = td[td.length - 1] // ending position for player 2

  if ((player1End.className == 'active') || (player2End.className == 'active')) {
    alert("Someone won!");
    window.location.reload();
  }
};


