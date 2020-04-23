
var gameState = 0;
var playerCount;
var player;
var form;
var game;
var database;

var drawing = [];
var currentPath = [];

var isDrawing = false;


function setup()
{
  canvas = createCanvas(500, 500);
  database = firebase.database();
  form = new Form();
  if(gameState === 1)
  {
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);
    game = new Game();
  }
}

function startPath()
{
  isDrawing = true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath()
{
  isDrawing = false;
}

function draw()
{
  //background(255);
  background(0);
  if(isDrawing && gameState === 1)
  {
    var points = 
    {
      x: mouseX,
      y: mouseY
    }

    currentPath.push(points);

    beginShape();
    stroke(255);
    strokeWeight(4);
    noFill();
    for(i = 0; i < drawing.length; i++)
    {
      var path = drawing[i];
      for(j = 0; j < path.length; j++)
      {
        vertex(path[j].x, path[j].y);
      }
      endShape();
    }
  }
}
