
//KEY------------------------------------------------------------------
//1 - HORIZONTAL
//2 - HORIZONTAL LEFT END
//3 - HORIZONTAL RIGHT END
//4 - VERTICAL
//5 - VERTICAL top END
//6 - VERTICAL bottom END
//7 - FOOD
//8 - EMPTY
//----------------------------------------------------------------------

var ballcount = 0;
function convertToLevel(map, atlas) {
	var horizontal = atlas.getSprite("horizontalwall.png");
		horizontal.scale = 0.5;

	var horizontalleft = atlas.getSprite("horizontalleftend.png");
		horizontalleft.scale = 0.5;

	var horizontalright = atlas.getSprite("horizontalrightend.png");
		horizontalright.scale = 0.5;

	var vertical = atlas.getSprite("verticalwall.png");
		vertical.scale = 0.5;

	var verticaltop = atlas.getSprite("verticaltopend.png");
		verticaltop.scale = 0.5;

	var verticalbottom = atlas.getSprite("verticalbottomend.png");
		verticalbottom.scale = 0.5;

	var food = atlas.getSprite("smfood.png");
		food.scale = 0.5;

	var ghostline = atlas.getSprite("ghostline.png");

	var power =  atlas.getSprite("power.png");

	var cherry = atlas.getSprite("cherry.png");
	var sofar = 0;

	for (var i = 0; i < map.length; i++) {
		var maprow = map[i];
		for (var j = 0; j < maprow.length; j++) {
			if (maprow[j] === 1){
				horizontal.draw(j * 16, i * 16);
			}
			else if (maprow[j] === 2) {
				horizontalleft.draw(j * 16, i * 16);
			}
			else if (maprow[j] === 3) {
				horizontalright.draw(j * 16, i * 16);
			}
			else if (maprow[j] === 4) {
				vertical.draw(j * 16, i * 16);
			}
			else if (maprow[j] === 5) {
				verticaltop.draw(j * 16, i * 16);
			}
			else if (maprow[j] === 6) {
				verticalbottom.draw(j * 16, i * 16);
			}
			else if (maprow[j] === 7) {
				sofar += 1;
				food.draw(j * 16, i * 16);
			}
			else if (maprow[j] === 9){
				ghostline.draw(j * 16, i * 16);
			}
			else if (maprow[j] === 10) {
				power.draw(j * 16, i * 16);
			}
			else if (maprow[j] === 11) {
				cherry.draw(j * 16, i * 16);
			}
		}
	}

	ballcount = sofar;
};
