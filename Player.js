var xPos = 100;
var yPos = 100;
var width = 40;
var height = 40;

function Player()
{
	this.move()
}


Player.prototype.gameloop = function()
{
	console.log("gameLoop");
	window.requestAnimFrame(player.gameloop());
} 

Player.prototype.move = function()
{
	document.addEventListener("keydown",keyDownHandler, true);
}

function keyDownHandler(e)
{
	if(e.keyCode == 87) { //W
		clearCanvas();
		yPos = yPos - 10;
		ctx.fillRect(xPos, yPos, width, height);
		ctx.strokeRect(goalPosX, goalPosY, goalWidth, goalHeight);
	}

	if(e.keyCode == 65) { //A
		clearCanvas();
		xPos = xPos - 10;
		ctx.fillRect(xPos, yPos, width, height);
		ctx.strokeRect(goalPosX, goalPosY, goalWidth, goalHeight);
	}

	if(e.keyCode == 83) { //S
		clearCanvas();
		yPos = yPos + 10;
		ctx.fillRect(xPos, yPos, width, height);
		ctx.strokeRect(goalPosX, goalPosY, goalWidth, goalHeight);
	}

	if(e.keyCode == 68) { //D
		clearCanvas();
		xPos = xPos + 10;
		ctx.fillRect(xPos, yPos, width, height);
		ctx.strokeRect(goalPosX, goalPosY, goalWidth, goalHeight);
	}
}

function clearCanvas()
{
	canvas.width = canvas.width;
}

Player.prototype.draw = function()
{
	//ctx.fillStyle = rgb( 0, 0, 0);
	ctx.fillRect(xPos, yPos, width, height);
}

Player.prototype.collision = function(e)
{
    var collides=false;
         
    if ((xPos < goalPosX + goalWidth) &&
    	(xPos + width > goalPosX) &&
    	(yPos + height > goalPosY) &&
    	(yPos < goalPosY + goalHeight) )
    	{            
        	collides = true;
    	}
         
    return collides;
}
