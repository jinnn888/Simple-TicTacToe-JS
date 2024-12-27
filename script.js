const tiles = document.querySelectorAll('.tile');
const playerTurns = ['X', 'O'];
let player = playerTurns[0];

const winningCombinations = [
	[0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

let placements = [
	'', '', '',
	'', '', '',
	'', '', ''
];


tiles.forEach((tile, index) => {
	tile.addEventListener('click', function() {
		tile.textContent = player;

		if (placements[index] == '') {
			placements[index] = player;
		}
		console.log(placements)

		if (checkWinner(index)) {
			return
		}
		player = playerTurns[0] == player ? playerTurns[1] : playerTurns[0];
	})
})

function checkWinner(index) {
	const isDraw = placements.every((place) => place != '');
	if (isDraw) {
		alert('Draw! ');
		return true
	}


	for(let combination of winningCombinations) {
		const [a, b, c] = combination;

		if (placements[a] != '' && placements[b] != '' && placements[c] != '') {
			if (placements[a] == placements[b] && placements[b] == placements[c]) {
				document.querySelector('h2').textContent = `${player} wins!`
				return true;
			}
		}
	}

	return false;

 }
