/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const  ctx = canvas.getContext('2d');
CANVAS_WIDTH= canvas.width =500;
CANVAS_HEIGHT= canvas.height =1000;
const numberOfEnemies = 100;
const enemiesArray = [];


let gameFrame = 0;
class Enemy{
    constructor(){
        this.image = new Image();
        this.image.src = 'enemy1.png';
  
        this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spiteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spiteHeight / 2.5;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update(){
        this.x += Math.random() * 5 -2.5;
        this.y += Math.random() * 5 -2.5;
        if(gameFrame % this.flapSpeed == 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
    }
    draw(){
            ctx.drawImage(this.image,this.frame * this.spriteWidth,0,this.spriteWidth,
            this.spiteHeight,
            this.x, this.y,
             this.width, this.height);
    }
};
for(let i = 0; i < 100; i++){
 enemiesArray.push(new Enemy());
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemiesArray.forEach(enemy =>{
        enemy.update();
        enemy.draw();
    })
    requestAnimationFrame(animate);
}
animate();