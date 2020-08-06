export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
	Array.from(Array(STAGE_HEIGHT), () => 
		new Array(STAGE_WIDTH).fill([0, 'clear'])
	)

//for loops will be faster than map or for each because we will loop thru tetromino
//foreach cant break out

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
	for(let y = 0; y < player.tetromino.length; y += 1) {
		for(let x = 0; x < player.tetromino[y].length; x+= 1) {
			// 1. check that we're on an actual tet cell
			if(player.tetromino[y][x] !== 0) {
				if(
				//.2 check that movement is inside game area height (y)
				// we shouldnt go through the bottom of play area
				!stage[y + player.pos.y + moveY] || 
				//.3 check that movement is inside game area width (x)
				!stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
				//.4 check if the cell were moving to is clear or not
				stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
					'clear'
				) {
					return true;
				}
			}

		}
	}
}