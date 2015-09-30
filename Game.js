var canvas
var ctx
	
function Game()
{
	this.player = new Player();
	this.goal = new Goal();

	this.initCanvas();
	this.draw();
}

Game.prototype.gameloop = function()
{
	console.log("gameLoop");
	game.draw();
	game.checkCollision();
	window.requestAnimationFrame(game.gameloop);
} 

Game.prototype.initCanvas = function()
{
	canvas= document.createElement("canvas");
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

Game.prototype.draw = function()
{
	this.player.draw();
	this.goal.draw();
}

Game.prototype.checkCollision = function()
{
    if (this.player.collision(this.goal) == true)
	{   
        this.collisionResponse();  

    } 
}


Game.prototype.collisionResponse = function()
{
 	ctx.save();
	ctx.fillStyle = rgb(100, 0, 0);
	ctx.font = 'italic 40pt Calibri';
	ctx.textBaseline = "top";
	ctx.fillText( "You Win", 200, 200);
	ctx.restore();      
}

function rgb(r, g, b) 
{ 
	return 'rgb('+this.clamp(Math.round(r),0,255)+', '+this.clamp(Math.round(g),0,255)+', '+this.clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<mina) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}
