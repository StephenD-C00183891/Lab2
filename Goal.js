var goalPosX = 400
var goalPosY = 400

var goalWidth = 40;
var goalHeight = 40;

function Goal()
{
}


Goal.prototype.draw = function()
{
	ctx.strokeRect(goalPosX, goalPosY, goalWidth, goalHeight);
}
