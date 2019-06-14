
var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
var minRadius = 2;

var colorArray = [
    '#f6e58d',
    '#ffbe76',
    '#f9ca24',
    '#f0932b',
    '#7ed6df',
    '#e056fd',
    '#22a6b3',
    '#be2edd',
    '#ff7979',
    '#eb4d4b',
    '#686de0',
    '#4834d4',
    '#95afc0',
    '#535c68',
    '#130f40',
    '#c7ecee',
    '#dff9fb',
    '#fff'
]

window.addEventListener("mousemove",function(event){
    this.mouse.x=event.x;
    this.mouse.y=event.y;
});


function Circle(x,y,radius,dx,dy) {
    this.x = x;
    this.y = y;
    this.radius=radius;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle= this.color;
        c.fill();
    };
    this.update=function(){
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius> canvas.height || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

       if ( mouse.x-this.x < 50 && mouse.x -this.x > -50 && mouse.y-this.y< 50 && mouse.y-this.y > -50 ) {
            if(this.radius < maxRadius) {
                this.radius += 1;
            }
       }
       else if(this.radius > 2) {
           this.radius -= 1;
       }

        this.draw();
    }
}

var circleArray = [];
for(var i = 0; i < 500; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    
    circleArray.push(new Circle(x, y, radius , dx, dy));
}

var circle = new Circle(100, 100, 30, 10, 10);
// circle.update();
function animate(){
    c.clearRect(0,0,canvas.width,canvas.height)
    requestAnimationFrame(animate);


    for(var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();



