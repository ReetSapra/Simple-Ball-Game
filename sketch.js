var ballSet,ballImage, paddleImage ,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImage = loadImage ("ball.png");
  paddleImage = loadImage ("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite (200,200,10,10);
  ball.addImage ("ballSet", ballImage);
  ball.velocityX = 9;

  
  paddle = createSprite (390,200,10,10)
  paddle.addImage ("paddleSet", paddleImage);
  
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites ();
  ball.bounceOff (edges[0]);
  ball.bounceOff (edges[2]);
  ball.bounceOff (edges[3]);
  ball.bounceOff (paddle);
  randomVelocity ();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  { paddle.y = paddle.y - 20;
   
  }
  
  if(keyDown(DOWN_ARROW))
  {paddle.y = paddle.y + 20;
   
  }
  drawSprites();
  
}

function randomVelocity()
{
  if (ball.bounceOff (paddle)){
    ball.velocityY = random (1,10);
  
  }
}

